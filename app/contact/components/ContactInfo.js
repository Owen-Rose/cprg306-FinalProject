// ContactInfo.js
import React from "react";

const ContactInfo = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
      <p>
        For any inquiries or information, feel free to reach out to us via email
        or phone.
      </p>
      <p className="mt-4">
        Email: <span className="font-semibold">info@webwizardsclub.com</span>
      </p>
      <p>
        Phone: <span className="font-semibold">+1 (123) 456-7890</span>
      </p>
    </div>
  );
};

export default ContactInfo;
