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
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure index.html has <div id='root'></div>");
}

try {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </StrictMode>
  );
} catch (error) {
  console.error("Failed to render app:", error);
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h1>Failed to load application</h1>
        <p>${error.message}</p>
        <button onclick="window.location.reload()">Reload Page</button>
      </div>
    `;
  }
}
