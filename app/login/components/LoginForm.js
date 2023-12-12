/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import supabase from "../../../config/supabaseClient";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error.message);
        // Handle error (display error message, etc.)
      } else {
        console.log("User:", user);
        // Redirect to dashboard or another page
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Supabase error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-6">
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
          className="text-black w-full px-3 py-2 placeholder-gray-300 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-6">
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
          className="text-black w-full px-3 py-2 placeholder-gray-300 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <Link href="/dashboard">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
      </Link>

      <div className="mt-4 text-center">
        <p className="text-gray-500 text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
