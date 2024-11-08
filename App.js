import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantDetail from "./src/components/RestaurantDetail";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components/Contact";

const AppLayout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
