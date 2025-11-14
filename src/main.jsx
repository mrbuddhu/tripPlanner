import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateTrip from "./create-trip";
import Header from "./components/ui/custom/Header";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Viewtrip from "./view-trip/[tripId]/index.jsx";
import MyTrips from "./my-trips/index.jsx";
import ErrorBoundary from "./components/ErrorBoundary";

console.log("🚀 App starting...");
console.log("✅ All imports loaded");

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <App />
      </>
    ),
  },
  {
    path: "/create-trip",
    element: (
      <>
        <Header />
        <CreateTrip />
      </>
    ),
  },
  {
    path: "/view-trip/:tripId",
    element: (
      <>
        <Header />
        <Viewtrip />
      </>
    ),
  },
  {
    path: "/my-trips",
    element: (
      <>
        <Header />
        <MyTrips />
      </>
    ),
  }
]);

const googleClientId = import.meta.env.VITE_GOGGLE_AUTH_CLIENT_ID || import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID || "";

// Wrap app content
const AppContent = () => {
  if (googleClientId) {
    return (
      <GoogleOAuthProvider clientId={googleClientId}>
        <Toaster />
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    );
  }
  // Fallback if no Google OAuth client ID
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};

// Ensure root element exists before rendering
console.log("🔍 Looking for root element...");
console.log("📍 Current URL:", window.location.href);
console.log("🌍 Environment:", import.meta.env.MODE);
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ Root element not found!");
  document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif;"><h1>Error: Root element not found</h1><p>Make sure index.html has &lt;div id="root"&gt;&lt;/div&gt;</p></div>';
  throw new Error("Root element not found. Make sure index.html has <div id='root'></div>");
}
console.log("✅ Root element found");

try {
  console.log("🎨 Creating root and rendering...");
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </StrictMode>
  );
  console.log("✅ App rendered successfully");
  
  // Hide loading indicator once app renders
  const loadingEl = document.getElementById('loading');
  if (loadingEl) {
    setTimeout(() => {
      loadingEl.style.display = 'none';
    }, 100);
  }
} catch (error) {
  console.error("❌ Failed to render app:", error);
  const loadingEl = document.getElementById('loading');
  if (loadingEl) loadingEl.style.display = 'none';
  
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif; background: #fee; border: 2px solid #fcc; margin: 20px; border-radius: 8px;">
        <h1 style="color: #c33;">Failed to load application</h1>
        <p style="color: #666;">${error.message}</p>
        <details style="text-align: left; margin-top: 20px; background: #f5f5f5; padding: 10px; border-radius: 4px;">
          <summary style="cursor: pointer; font-weight: bold;">Error Details</summary>
          <pre style="overflow: auto; font-size: 12px; margin-top: 10px;">${error.stack || 'No stack trace available'}</pre>
        </details>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #0070f3; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Reload Page</button>
      </div>
    `;
  }
}
