import { useState, useEffect } from "react";

const DestinationInput = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  // The Geoapify key can now be managed on the server side if you wanted to
  // but for a dev proxy, it's fine to keep it here.
  const apiKey = import.meta.env.VITE_GEOAPIFY_KEY;

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(() => {
      if (!apiKey) {
        console.warn("⚠️ Geoapify API key not found");
        return;
      }

      // Use direct API URL in production, proxy in development
      const apiUrl = import.meta.env.PROD
        ? `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
            query
          )}&limit=5&apiKey=${apiKey}`
        : `/api/v1/geocode/autocomplete?text=${encodeURIComponent(
            query
          )}&limit=5&apiKey=${apiKey}`;

      fetch(apiUrl)
        .then(async (res) => {
          // Check if response is actually JSON
          const contentType = res.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            const text = await res.text();
            console.error("❌ API returned non-JSON response:", text.substring(0, 200));
            throw new Error(`API returned ${contentType || "unknown"} instead of JSON`);
          }
          return res.json();
        })
        .then((data) => {
          setSuggestions(data.features || []);
        })
        .catch((err) => {
          console.error("❌ Error fetching location suggestions:", err);
          setSuggestions([]);
        });
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = (place) => {
    setQuery(place.properties.formatted);
    setSuggestions([]);
    onSelect?.(place);
  };

  return (
    <div className="mt-8 w-full relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destination..."
        className="w-full max-w-3xl px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
      />

      {suggestions.length > 0 && (
        <ul className="absolute z-50 w-full max-w-3xl bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto text-sm">
          {suggestions.map((place, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(place)}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition"
            >
              {place.properties.formatted}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DestinationInput;