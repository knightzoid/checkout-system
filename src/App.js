import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeliveryPage from "./components/DeliveryPage";
import ShipmentPage from "./components/ShipmentPage";
import ThankYouPage from "./components/ThankYouPage";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeliveryPage />} />
        <Route path="/shipment" element={<ShipmentPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default App;
