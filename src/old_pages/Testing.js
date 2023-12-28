import React, { useState, useEffect } from "react";
import axios from "axios";

function Testing() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("technology");

  // https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=rD944cJAQtltlgRsfcfrtBAm8tWq4Kds
  useEffect(() => {
    // Fetch data when the component mounts
    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=rD944cJAQtltlgRsfcfrtBAm8tWq4Kds`
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        console.log("Data from NYT : ", data);
        // Handle the fetched data here
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>Hello</h1>
      {news.results ? (
        <div>
          <ul>
            {/* Map through the fetched data and render each item */}
            {news.results.map((item, i) => (
              <div>
                <img
                  src={
                    item.media[0]
                      ? item.media[0]?.["media-metadata"][2].url
                      : ""
                  }
                  alt="image"
                />
                <h1>{item.title}</h1>
                <p>{item.abstract}</p>
              </div>
            ))}
          </ul>
          {console.log("news here : ", news.results)}
        </div>
      ) : (
        <div>
          No Data
          {/* <button onClick={() => setQuery("bitcoin")}>Bitcoin</button> */}
        </div>
      )}
    </>
  );
}

export default Testing;

// GET {`https://newsapi.org/v2/everything?q=${bitcoin}&apiKey=${bb6e286ed00c4589abe0a2e415a6388d}`}

// bb6e286ed00c4589abe0a2e415a6388d
