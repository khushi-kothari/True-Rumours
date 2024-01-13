import React, { useState, useRef, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, matchPath, Outlet, useNavigate } from "react-router-dom";
import logo from "../Images/logo.jpeg";
import { useAuth0 } from "@auth0/auth0-react";

// Sample data containing button information
const buttonData = [
  { label: "Sport", category: "sport" },
  { label: "Tech", category: "tech" },
  { label: "World", category: "world" },
  { label: "Finance", category: "finance" },
  { label: "Politics", category: "politics" },
  { label: "Business", category: "business" },
  { label: "Economics", category: "economics" },
  { label: "Entertainment", category: "entertainment" },
  { label: "Beauty", category: "beauty" },
  { label: "Travel", category: "travel" },
  { label: "Music", category: "music" },
  { label: "Food", category: "food" },
  { label: "Science", category: "science" },
  { label: "Gaming", category: "gaming" },
  { label: "Energy", category: "energy" },
  { label: "Technology", category: "technology" },
  // Add more buttons for other categories if needed
];

export function Navbar({ sendQueryToParent }) {
  // const match = matchPath({ path: "/users/:id" }, "/users/123");
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [profileCard, setProfileCard] = useState(false);
  const [query, setQuery] = useState("");
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   return () => {
  //     // sendQueryToParent(query);
  //     console.log("query: ", query);
  //   };
  // }, [query]);

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/search", { state: { query } });
      setShouldRedirect(false); // Set shouldRedirect to false after redirection
    }
  }, [shouldRedirect]);

  const handleMouseOver = () => {
    clearTimeout(timeoutRef.current); // Clear any existing timeout
    setProfileCard(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the profile card after a delay (e.g., 500ms)
    timeoutRef.current = setTimeout(() => {
      setProfileCard(false);
    }, 200);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    //console.log(e.target.value);
  };

  const debounce = (e) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {}, 300);
    };
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      console.log("Enter on Search ", e.target.value);
      setQuery(e.target.value);
      setShouldRedirect(true);
    }
  };

  return (
    <>
      {/* Your existing JSX */}
      {/* ... */}
      <nav
        className="z-10 relative"
        x-data="{open:false,menu:false, lokasi:false}"
      >
        {/* bg-dark */}
        {/* full width */}
        <div className="sticky z-10 bg-dark shadow">
          {/* max-width */}
          <div className=" mx-4 px-2 sm:px-4 lg:px-8">
            {/* main navbar */}
            <div className="relative flex items-center justify-between h-16">
              <Link className="flex flex-row mr-2" to="/#top">
                <img className="h-10 mr-4" src={logo} alt="Logo" />
                <h1 className="font-bold hidden justify-center items-center md:flex md:text-xl lg:text-3xl text-gray-800 font-serif ">
                  TrueRumours
                </h1>
              </Link>

              {/* search */}
              <link
                rel="stylesheet"
                href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
              />

              {/* Search */}
              <div className="max-w-2xl mx-auto hidden sm:flex">
                <form
                  className="flex items-center"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          filleRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full pl-10 p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400 dark:focus:border-gray-400"
                      placeholder="Search..."
                      onKeyUp={handleEnter}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                </form>
              </div>

              {/* Subscribe & Login */}
              <div className="flex ">
                {/* Subscribe */}
                <Link
                  to="/subscription"
                  className="inline-flex items-center py-1.5 px-1.5 ml-2 text-sm font-bold text-gray-800 rounded-lg border-2 border-gray-800 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300  dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
                >
                  Subscribe
                </Link>

                {/* Login / Logout */}
                {isAuthenticated ? (
                  <>
                    <img
                      className="rounded-full w-10 mx-4 hover:cursor-pointer"
                      src={user.picture}
                      alt={user.name}
                      onClick={() => {
                        setProfileCard(true); //make this to setProfileCard(!profileCard) once you redirect
                      }} //Redirect to User Profile
                      onMouseOver={handleMouseOver}
                    />
                    {profileCard && (
                      <>
                        <div
                          onMouseLeave={handleMouseLeave}
                          className="absolute top-20 -right-6 bg-lightBeige py-6 px-8 w-[300px] rounded-lg shadow-md opacity-[1] z-40"
                        >
                          <div className=" flex flex-col justify-center items-center">
                            <img
                              className="rounded-full w-20 mx-4 hover:cursor-pointer"
                              src={user.picture}
                              alt={user.name}
                            />
                            <h1 className="mt-3 mb-6 font-semibold text-gray-800 hover:cursor-pointer">
                              {user.name}
                            </h1>
                          </div>
                          <ul className=" text-gray-500">
                            <li className="mb-3 hover:text-gray-800 hover:cursor-pointer">
                              Subscription
                            </li>
                            <li className="mb-3 hover:text-gray-800 hover:cursor-pointer">
                              Collections
                            </li>
                            <li className="mb-3 hover:text-gray-800 hover:cursor-pointer">
                              Settings
                            </li>
                            <hr className="my-4" />
                            <li
                              className="hover:text-gray-800 hover:cursor-pointer"
                              onClick={() =>
                                logout({
                                  logoutParams: {
                                    returnTo: window.location.origin,
                                  },
                                })
                              }
                            >
                              Signout
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <Link
                    // to="/login"
                    onClick={() => loginWithRedirect()}
                    className="inline-flex items-center py-1.5 px-2 ml-2 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
                  >
                    <FaUserAlt className="mr-2" />
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sub Navbar */}
      <div className=" text-center mt-3 mx-3 text-sm text-gray-500 ">
        {buttonData.map((button, index) => (
          <button
            key={index}
            onClick={() => {
              // setToggle(!toggle);
              setQuery(button.label);
              setShouldRedirect(true);
            }}
            className={`hover:text-gray-800 px-2`}
          >
            #{button.label}
          </button>
        ))}
      </div>
      <Outlet />
    </>
  );
}

{
  /* <Link
                          // to="/login"
                          onClick={() =>
                            logout({
                              logoutParams: {
                                returnTo: window.location.origin,
                              },
                            })
                          }
                          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Logout
                        </Link> */
}

{
  /* <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="mr-2 -ml-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    Search
                  </button> */
}
