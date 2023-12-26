import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/favicon.ico";

function Block({ ...props }) {
  let { data, img, title, desc } = { ...props };
  // console.log("data from card: ", img, title, desc);
  // let article = data.data;
  // console.log("article : ", article);
  return (
    <div class="max-w-2xl mx-auto">
      <div class="mb-4 border-2 border-gray-100">
        <a href="#">
          <img
            class="rounded-t-sm h-36 w-full overflow-hidden"
            src={img}
            alt={desc}
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="text-gray-900 font-bold text-lg tracking-tight mb-2 dark:text-white h-20 overflow-clip">
              {/* {article.title} */}
              {title}
            </h5>
          </a>
          <p class="font-normal text-gray-700 mb-3 dark:text-gray-400 overflow-clip truncate h-12">
            {/* {article.abstract} */}
            {desc}
          </p>
          <Link
            to={"/detail"}
            state={data}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Block;

// src={
//   article.media?.length > 0
//     ? article.media[0]?.["media-metadata"].length > 0
//       ? article.media[0]?.["media-metadata"]?.[
//           article.media[0]?.["media-metadata"].length - 1
//         ].url
//       : "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     : article.multimedia?.length > 0
//     ? article.multimedia[article.multimedia.length - 1].url
//     : "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// }
