// ContactForm.js
import React from "react";

const ContactForm = () => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Your Email
          </label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Subject
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter the subject of your message"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange text-black p-2 rounded-md hover:bg-orange-dark"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
