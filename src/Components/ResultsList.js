import React from "react";
import "./ResultList.css";

export default function ResultsList(props) {
  const condition = props.filter;
  const condition2 = props.printType;
  if (condition !== "free-ebooks" || condition2 !== "all") {
    return (
      <section className="results">
        {props.results.length > 0 ? (
          <>
            <h2>Results for {props.query}</h2>

            {props.results.map((result) => (
              <div className="resultsList">
                <img
                  src={result.volumeInfo.imageLinks.smallThumbnail}
                  className="imagetofloat"
                />
                <ul>
                  <li>
                    <h2>Title: {result.volumeInfo.title}</h2>
                  </li>
                  <li>Author: {result.volumeInfo.authors}</li>

                  <li>Description: {result.volumeInfo.description}</li>
                </ul>
              </div>
            ))}
          </>
        ) : (
          <h2>No Results found</h2>
        )}
      </section>
    );
  } else {
    return (
      <section className="results">
        {props.results.length > 0 ? (
          <>
            <h2>Results for {props.query}</h2>

            {props.results.map((result) => (
              <div className="resultsList">
                <div>
                  <img src={result.volumeInfo.imageLinks.smallThumbnail} />
                </div>

                <ul>
                  <li>
                    <h2>Title: {result.volumeInfo.title}</h2>
                  </li>
                  <li>Author: {result.volumeInfo.authors}</li>
                  <li>Price: Free e-Book</li>
                  <li>Description: {result.volumeInfo.description}</li>
                </ul>
              </div>
            ))}
          </>
        ) : (
          <h2>No Results found</h2>
        )}
      </section>
    );
  }
}
