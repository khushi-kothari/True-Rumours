import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import List from "../components/List";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import { Link } from "react-router-dom";
import Block from "../components/Block";
import Footer from "../components/Footer";

function Feed() {
  const [news, setNews] = useState([]);
  const [isSActive, setS] = useState(true);
  const [isFActive, setF] = useState(true);
  const [isAdActive, setAd] = useState(true);
  const [trending, setTrending] = useState([]);
  const [sports, setSports] = useState([]);
  const [finance, setFinance] = useState([]);
  const [query, setQuery] = useState("");
  // const [masonary, setMasonary] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          newsResponse,
          sportsResponse,
          financeResponse,
          trendingResponse,
        ] = await Promise.all([
          axios.get(
            "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=rD944cJAQtltlgRsfcfrtBAm8tWq4Kds"
          ),
          axios.get(
            "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&api-key=rD944cJAQtltlgRsfcfrtBAm8tWq4Kds"
          ),
          axios.get(
            "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=business&api-key=rD944cJAQtltlgRsfcfrtBAm8tWq4Kds"
          ),
          axios.get(
            "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=rD944cJAQtltlgRsfcfrtBAm8tWq4Kds"
          ),
        ]);

        setNews(newsResponse.data);
        setSports(sportsResponse.data.response);
        setFinance(financeResponse.data.response);
        setTrending(trendingResponse.data.results);

        console.log("Data from NYT:", newsResponse.data);
        console.log("Sports data:", sportsResponse.data.response);
        console.log("Finance data:", financeResponse.data.response);
        console.log("Trending data:", trendingResponse.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //  return () => {
  //   }
  // }, [query])

  const handleS = () => {
    setS(!isSActive);
    // console.log(sports);
  };

  const handleF = () => {
    setF(!isFActive);
    // console.log(finance);
  };

  const handleAd = () => {
    setAd(false);
  };

  // Let's see if this is necessary or not
  const handleQuery = (data) => {
    setQuery(data);
  };

  return (
    <>
      <div className="mb-10 w-screen overflow-clip">
        <div className=" block">
          <Navbar sendQueryToParent={handleQuery} />
          {news.results ? (
            <div>
              <div>
                {/* Hero Section */}
                <div className="grid grid-cols-5 h-screen mt-12 gap-6 mx-12">
                  <div className="col-span-5 lg:col-span-3 h-fit">
                    <img
                      className=" w-full brightness-50 rounded-sm"
                      src={
                        news.results[0]["multimedia"].length > 0
                          ? news.results[0]?.["multimedia"][2].url
                          : "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt={""}
                    />{" "}
                    <h1 className="my-6 text-4xl font-semibold">
                      {news.results[0].title}
                    </h1>
                    <p className="text-xl text-gray-600">
                      {news.results[0].abstract}
                    </p>
                    <Link
                      to={"/detail"}
                      state={news.results[0]}
                      className="text-white my-7 bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-900"
                    >
                      Read more
                      <svg
                        className="-mr-1 ml-2 h-4 w-4"
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
                  <div className="card-container h-fit w-[35vw] mr-12 ">
                    <Card
                      data={sports?.docs[5]}
                      img={`https://static01.nyt.com/${
                        sports?.docs[5].multimedia[
                          sports?.docs[5].multimedia.length - 1
                        ].url
                      }`}
                      title={
                        sports?.docs[5].headline.hasOwnProperty(
                          "print_headline"
                        )
                          ? sports?.docs[5].headline.print_headline
                          : sports?.docs[5].headline?.main
                      }
                      desc={sports?.docs[5].abstract}
                    />
                    <Card
                      data={sports?.docs[6]}
                      img={`https://static01.nyt.com/${
                        sports?.docs[6].multimedia[
                          sports?.docs[6].multimedia.length - 1
                        ].url
                      }`}
                      title={
                        sports?.docs[6].headline.hasOwnProperty(
                          "print_headline"
                        )
                          ? sports?.docs[6].headline.print_headline
                          : sports?.docs[6].headline?.main
                      }
                      desc={sports?.docs[6].abstract}
                    />
                  </div>

                  <div className="list-container h-fit w-[35vw] mr-12">
                    <List data={sports?.docs[5]} />
                    <List data={sports?.docs[6]} />
                  </div>
                </div>
                {/* Latest Section */}

                <div>
                  <h1 className="sticky text-3xl font-bold bg-beige pb-10 mt-24 font-serif ml-12">
                    Latest
                  </h1>
                  <div className="grid grid-rows-1 grid-flow-col gap-4 overflow-scroll mx-12">
                    {
                      <>
                        {news.results.slice(3, 14).map((t) => (
                          <div>
                            {/* {console.log("latest from maps : ", t)} */}
                            <Card
                              data={t}
                              img={
                                t.multimedia?.length > 0
                                  ? t.multimedia[t.multimedia.length - 1].url
                                  : "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              }
                              title={
                                t.hasOwnProperty("title")
                                  ? t.title
                                  : t.headline?.main
                              }
                              desc={t.abstract}
                            />
                          </div>
                        ))}
                      </>
                    }
                  </div>
                </div>

                {/* Ad Section */}
                <div>
                  <h1 className="sticky text-3xl font-bold bg-beige pb-10 mt-16 font-serif mx-12">
                    Trending
                  </h1>
                  <div className="grid grid-cols-5 h-[100vh] gap-8 mx-12">
                    <div className="col-span-5 md:col-span-3">
                      <img
                        className=" w-full brightness-50 rounded-sm"
                        src={
                          trending[0].media[0]?.["media-metadata"].length > 0
                            ? trending[0].media[0]?.["media-metadata"]?.[
                                trending[0].media[0]?.["media-metadata"]
                                  .length - 1
                              ].url
                            : "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        alt={""}
                      />{" "}
                      <h1 className="my-6 text-4xl font-semibold">
                        {news.results[0].title}
                      </h1>
                      <p className="text-xl text-gray-600">
                        {news.results[0].abstract}
                      </p>
                      <Link
                        to={"/detail"}
                        state={news.results[0]}
                        className="text-white my-7 bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-900"
                      >
                        Read more
                        <svg
                          className="-mr-1 ml-2 h-4 w-4"
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
                    <div className="col-span-5 md:col-span-2 overflow-scroll">
                      <div className="grid grid-cols-1 grid-flow-row overflow-scroll">
                        {/* <div className="bg-beige">
                        <h1 className="sticky text-3xl font-bold bg-beige font-serif">
                          Trending
                        </h1>
                      </div> */}

                        <div className="container">
                          {isAdActive ? (
                            // className="flex flex-col justify-center items-center"
                            <div>
                              <img
                                src="https://study.com/cimages/multimages/16/burgerad15179945781952220614.png"
                                alt="advertisement"
                                className="rounded-sm w-full h-5/6"
                              />
                              <button
                                className="mt-6 ml-40 bg-zinc-200 p-3 rounded-lg text-lg shadow-sm text-gray-800 font-semibold hover:text-black hover:text-xl"
                                onClick={handleAd}
                              >
                                <GrClose className="inline mr-1 font-bold" />{" "}
                                Remove Ads
                              </button>{" "}
                            </div>
                          ) : (
                            <div className="grid grid-rows-1 grid-flow-col md:grid-cols-1 md:grid-flow-row lg:grid-cols-2 gap-6 overflow-scroll mb-20 px-1">
                              {/* {console.log("Trending state : ", trending)} */}
                              {trending.length > 0 ? (
                                <div>
                                  {trending.slice(0, 5).map((t) => (
                                    <div>
                                      {/* {console.log("Trending side-bar from maps : ", t)} */}
                                      <Block
                                        data={t}
                                        img={
                                          t.media[1]?.["media-metadata"]
                                            .length > 0
                                            ? t.media[1]?.["media-metadata"]?.[
                                                t.media[1]?.["media-metadata"]
                                                  .length - 1
                                              ].url
                                            : "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        }
                                        title={t.title}
                                        desc={t.abstract}
                                      />
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div>
                                  {news.results.slice(1, 5).map((t) => (
                                    <div>
                                      {console.log("No Data in Trending")}
                                      Loading Data in Trending...
                                      <Block
                                        data={t.results}
                                        img={
                                          t.multimedia?.length > 0
                                            ? t.multimedia[
                                                t.multimedia.length - 1
                                              ].url
                                            : "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        }
                                        title={t.title}
                                        desc={t.abstract}
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                              {trending.length > 0 ? (
                                <div className="">
                                  {trending.slice(5, 10).map((t) => (
                                    <div>
                                      {/* {console.log("Trending side-bar from maps : ", t)} */}
                                      <Block
                                        data={t}
                                        img={
                                          t.media[0]?.["media-metadata"]
                                            .length > 0
                                            ? t.media[0]?.["media-metadata"]?.[
                                                t.media[0]?.["media-metadata"]
                                                  .length - 1
                                              ].url
                                            : "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        }
                                        title={t.title}
                                        desc={t.abstract}
                                      />
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div>
                                  {news.results.slice(5, 10).map((t) => (
                                    <div>
                                      {console.log("No Data in Trending")}
                                      Loading Data in Trending...
                                      <Block
                                        data={t.results}
                                        img={
                                          t.multimedia?.length > 0
                                            ? t.multimedia[
                                                t.multimedia.length - 1
                                              ].url
                                            : "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        }
                                        title={t.title}
                                        desc={t.abstract}
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Entertainment List Section */}
                <div className="mt-28">
                  <h1 className="sticky text-3xl font-bold bg-beige pb-8 mt-16 font-serif mx-12">
                    Entertainment
                  </h1>
                  <div className="mx-12">
                    <List data={sports?.docs[4]} />
                    <List data={sports?.docs[5]} />
                    <List data={sports?.docs[6]} />
                  </div>
                </div>
                {/* Sports - Business Section */}
                <div className="grid grid-cols-2 mt-8">
                  {/* Sports */}
                  <div>
                    <h1 className="sticky text-3xl font-bold w-full bg-beige my-10 font-serif mx-12">
                      Sports{" "}
                      {/* <button>
                        <IoIosArrowDropdownCircle
                          className="inline"
                          onClick={handleS}
                        />
                      </button> */}
                    </h1>
                    <div
                      className={`${
                        isSActive ? " visible " : "hidden"
                      } grid grid-rows-1 grid-flow-col gap-4 overflow-scroll mx-12 `}
                    >
                      {/* {console.log("sports : ", sports)} */}
                      {sports.docs.length > 0 ? (
                        <div className="grid grid-cols-2 grid-flow-row gap-4">
                          {sports.docs.slice(0, 4).map((t) => (
                            <div>
                              {/* {console.log("Trending side-bar from maps : ", t)} */}
                              <Card
                                data={t}
                                img={`https://static01.nyt.com/${
                                  t.multimedia[t.multimedia.length - 1].url
                                }`}
                                title={
                                  t.headline.hasOwnProperty("print_headline")
                                    ? t.headline.print_headline
                                    : t.headline?.main
                                }
                                desc={t.abstract}
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 grid-flow-row gap-4">
                          {news.results.slice(0, 4).map((t) => (
                            <div>
                              {console.log("No Data in Sports")}
                              Loading Data in sports...
                              <Card
                                data={t.results}
                                img={
                                  t.multimedia?.length > 0
                                    ? t.multimedia[t.multimedia.length - 1].url
                                    : "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                }
                                title={
                                  t.hasOwnProperty("title")
                                    ? t.title
                                    : t.headline?.main
                                }
                                desc={t.abstract}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Business */}
                  <div>
                    <h1 className="sticky text-3xl font-bold w-full bg-beige my-10 font-serif mx-12">
                      Business{" "}
                      {/* <button>
                        <IoIosArrowDropdownCircle
                          className="inline"
                          onClick={handleF}
                        />
                      </button> */}
                    </h1>
                    <div
                      className={`${
                        isFActive ? " visible " : "hidden"
                      } grid grid-rows-1 grid-flow-col gap-4 overflow-scroll mx-12 `}
                    >
                      {/* {console.log("finance : ", finance)} */}
                      {finance.docs.length > 0 ? (
                        <div className="grid grid-cols-2 grid-flow-row gap-4">
                          {finance.docs.slice(0, 4).map((t) => (
                            <div>
                              {/* {console.log("Finance from maps : ", t)} */}
                              <Card
                                data={t}
                                img={`https://static01.nyt.com/${
                                  t.multimedia[t.multimedia.length - 1].url
                                }`}
                                title={t.headline.main}
                                desc={t.abstract}
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 grid-flow-row gap-4">
                          {news.results.slice(0, 4).map((t) => (
                            <div>
                              {console.log("No Data in finance")}
                              Loading Data in finance...
                              <Card
                                data={t.results}
                                img={
                                  t.multimedia?.length > 0
                                    ? t.multimedia[t.multimedia.length - 1].url
                                    : "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                }
                                title={
                                  t.hasOwnProperty("title")
                                    ? t.title
                                    : t.headline.main
                                }
                                desc={t.abstract}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* {console.log("news here : ", news.results)} */}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center font-semibold text-slate-700 my-10 text-xl">
              Loading...
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Feed;

{
}
