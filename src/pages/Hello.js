import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

function Hello() {
  const history = useNavigate();
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = () => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=bb6e286ed00c4589abe0a2e415a6388d"
        )
        .then((response) => {
          setNews(response.data.articles);
          // history.push("/hello", response.data.articles); // If you want to pass this data to another route
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getNews(); // Invoke the function to fetch news on page load
  }, []); // Empty dependency array to run the effect only once

  // useEffect(() => {
  //   if (news.length > 0) {
  //     history.replace("/hello", news); // Navigating to '/hello' with news state
  //   }
  // }, [news, history]);

  // let arr = [];
  // arr.push(
  //   data.map((value) => {
  //     let title = value.title;
  //     console.log(title);
  //     return title;
  //   })
  // );
  return (
    <>
      <img
        className="fixed h-screen blur-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3pDJdlsYkBCHMyNzQPykn4JBRCpfmUN2Ig&usqp=CAU"
        alt="hero banner"
      />
      <div className="fixed z-10 pt-80 pl-80 text-center">
        <h1 className="text-6xl font-medium p-2 text-slate-100">
          Welcome to the True Rumours!
        </h1>
        <p className="pt-2 pb-5 text-slate-100">
          Find the most relevant news here.
        </p>
        {/* <button
          // onClick={getNews}
          className="bg-slate-100 p-2 rounded-md mt-2 mr-2 text-slate-800"
        >
          Get News
        </button> */}
        <Link
          to="/home"
          state={news}
          className="bg-slate-100 px-2 py-3 rounded-md mt-2 text-slate-800"
          aria-disabled
        >
          Go to News Page
        </Link>
      </div>
    </>
  );
}

export default Hello;
