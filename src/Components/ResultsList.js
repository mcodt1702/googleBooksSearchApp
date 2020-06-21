import React from "react";

export default function ResultsList(props) {
  return (
    <section className="results">
      {props.results.length > 0 ? (
        <>
          <h2>Results for {props.query}</h2>

          {props.results.map((result) => (
            <>
              <img src={result.volumeInfo.imageLinks.smallThumbnail} />
              <ul>
                <li>
                  <h2>Title: {result.volumeInfo.title}</h2>
                </li>
                <li>Author: {result.volumeInfo.authors}</li>
                <li>Price: ${result.saleInfo.listPrice.amount}</li>
                <li>Description: {result.volumeInfo.description}</li>
              </ul>
            </>
          ))}
        </>
      ) : (
        <h2>No Results found</h2>
      )}
    </section>
  );
}
