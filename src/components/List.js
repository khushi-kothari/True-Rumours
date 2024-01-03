import React from "react";
import logo from "../Images/favicon.ico";
import { Link } from "react-router-dom";

function List(data) {
  const { headline, abstract, multimedia, web_url } = data?.data || {};
  const title = headline.main;
  let img;
  multimedia.length > 0
    ? (img = `https://static01.nyt.com/${
        multimedia?.[multimedia.length - 1]?.url
      }`)
    : (img =
        "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  // console.log("from list : ", title, abstract, multimedia, img, url);
  return (
    <section className="text-gray-600 body-font">
      <div className="container">
        <div className="flex items-center py-4 sm:flex-row flex-col">
          <div className="sm:mr-10 inline-flex items-center justify-center text-gray-700 flex-shrink-0">
            <img src={img} alt="image" className="h-48 w-60" />
          </div>
          <div className="flex-grow sm:text-left mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              {title}
            </h2>
            <p className="leading-relaxed text-base">{abstract}</p>
            {/* <a
              className="mt-3 text-indigo-500 inline-flex items-center"
              href={web_url}
            > */}
            <Link
              to={"/detail"}
              state={data.data}
              className="mt-3 text-gray-800 font-semibold underline inline-flex items-center"
              // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            {/* </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default List;

// if (
//   !data.data ||
//   !data.data.title ||
//   !data.data.abstract ||
//   !data.data.multimedia ||
//   !data.data.multimedia.length
// ) {
//   // Handle empty data scenario or missing properties
//   return <p>No data available</p>;
// }
