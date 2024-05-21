import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import MapsPage from "./components/MapsPage";
import { useJsApiLoader } from "@react-google-maps/api";

const App = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.MAPS_API_KEY,
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/maps" element={<MapsPage isLoaded={isLoaded} />} />
      </Routes>
    </Router>
  );
};

export default App;
