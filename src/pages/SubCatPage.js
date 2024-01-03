import React, { useState, useEffect } from "react";
import List from "../components/List";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SubCatPage() {
  const location = useLocation();
  const { query } = location.state || {};
  const [results, setResults] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=rD944cJAQtltlgRsfcfrtBAm8tWq4Kds`
        );
        setResults(data.data.response.docs);
        console.log("Result Data of query: ", query, data.data.response.docs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <Navbar />
      <div className="mx-44 ">
        <h1 className="mt-10 mb-6 text-3xl font-bold text-slate-700">
          {query}
        </h1>
        <ul>
          {results && (
            <>
              {/* {console.log("inside conditional result: ", results)} */}
              {results.map((r, i) => {
                return <List data={r} key={i} />;
              })}
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default SubCatPage;
