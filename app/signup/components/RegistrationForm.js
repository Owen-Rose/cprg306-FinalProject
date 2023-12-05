"use client";

import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <form
      className="text-black max-w-md mx-auto bg-white p-8 shadow-md rounded-md mt-10"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Name:
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        required
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      <label
        htmlFor="email"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Email:
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      <label
        htmlFor="password"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Password:
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
