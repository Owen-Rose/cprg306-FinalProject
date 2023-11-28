import React from "react";
import HomePage from "../components/HomePage";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import LocationMap from "./components/LocationMap";

const App = () => {
  return (
    <div>
      <ContactForm />
      <ContactInfo />
      <LocationMap />
    </div>
  );
};

export default App;
