import React from "react";

export default function ResultsList(props) {
  return (
    <section className="results">
      {props.results.length > 0 ? (
        <>
          <h2>Results for {props.query}</h2>
          <ul>
            {props.results.map((result) => (
              <li>{result.volumeInfo.title}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2>No Results found</h2>
      )}
    </section>
  );
}
