// LocationMap.js
import React from "react";

const LocationMap = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
      {/* Embed a map using a service like Google Maps or Mapbox */}
      {/* Example: */}
      <iframe
        title="Club Location"
        className="w-full h-64 rounded-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80236.93230320029!2d-114.23273525664062!3d51.06408939999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f9268a69e81%3A0xb1db5e68bd61e28!2sSouthern%20Alberta%20Institute%20of%20Technology!5e0!3m2!1sen!2sca!4v1701153984865!5m2!1sen!2sca"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
