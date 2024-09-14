"use client";
import style from "./style.module.css";
import React, { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={`${style.font} bg-[#0A0F2B] text-[#4A62EA] min-h-[90px] px-[10vw]`}
      >
        <div className="max-w-screen-xl h-full flex flex-wrap items-center self-center justify-between align-middle mx-[auto] py-6 text-[14px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent bg-gray-800 bg-transparent border border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-blue-500 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/movies"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/tvseries"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
                >
                  TvSeries
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={` sm:order-2 md:gap-10 ${isOpen ? "hidden" : "flex"} `}
          >
            <Link
              href="/signup"
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
            >
              Signup
            </Link>

            <Link
              href="/login"
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
