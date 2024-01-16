import React, { useEffect, useState } from "react";
import logo from "../Images/logo.jpeg";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Footer() {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    alert("You have subscribed to the e-newsletters succesfully!");
    setEmail("");
  };

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/search", { state: { query } });
      setShouldRedirect(false); // Set shouldRedirect to false after redirection
    }
  }, [shouldRedirect]);

  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row lg:grid-flow-col gap-4 md:text-left text-center order-first">
          <div className="w-full col-span-2 md:col-span-1 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  Entertainment
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  Health & Fitness
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  Culture
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full col-span-2 md:col-span-1 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  Sunday Styles
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  The Millennium
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  Times Topics
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  Women's Health
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full col-span-2 md:col-span-1 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  Games & Events
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  Investments
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  Small Business
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                  onClick={(e) => {
                    // setToggle(!toggle);
                    setQuery(e.currentTarget.textContent);
                    setShouldRedirect(true);
                  }}
                >
                  Teens
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full col-span-2 md:col-span-2 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <form onSubmit={handleSubmit}>
                  <label
                    for="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    to TrueRumours{" "}
                  </label>
                  <div className="md:flex justify-center items-center">
                    <input
                      type="email"
                      id="footer-field"
                      name="footer-field"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full mr-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white my-7 bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center  dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-900"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Stay updated on latest news
              <br className="lg:block hidden" />
              around the globe.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-darkBeige">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            className="flex flex-row justify-center items-center mr-2"
            to="/#top"
          >
            <img className="h-10 rounded-full" src={logo} alt="Logo" />
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2024 TrueRumours
            </p>
          </Link>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 hover:text-gray-600 hover:cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 hover:text-gray-600 hover:cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 hover:text-gray-600 hover:cursor-pointer"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5 hover:text-gray-600 hover:cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
