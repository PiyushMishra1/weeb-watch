"use client";
import React, { useEffect } from "react";
import useLogin from "../Controller/LoginController";

const Login: React.FC = () => {
  const { error, setError, email, setEmail, password, setPassword, handleSubmit, loading } = useLogin();

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-[#0A0F2B] flex items-center justify-center min-h-screen">
      <div className="bg-[#cecdcd24] p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-white font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={handleSubmit}
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-white">Don&apos;t have an account?</span>
          <a href="/signup" className="text-sm text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login;
