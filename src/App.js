import React from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchComponent from "./Components/SearchComponent";
import BookTypeFliter from "./Components/BookTypeFliter";
import FreeBookFilter from "./Components/FreeBookFilter";
import ResultsList from "./Components/ResultsList";

const key = "AIzaSyAbm_P0jNZYkEIpr57RVnV1pCuk9HgLw_s";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      printType: "all",
      filter: "",
      query: "",
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.setState(
      {
        query: e.target.userInput.value,
      },
      this.handleFetch
    );
  }; // let inputText = this.state.params.userInput

  handleFilter = (e, key) => {
    console.log({ e, key });
    const { value } = e.target;
    this.setState(
      {
        [key]: value,
      },
      this.handleFetch
    );
  };

  handleFetch() {
    const { printType, filter, query } = this.state;

    let baseURL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}&printType=${printType}`;
    if (filter != "") {
      baseURL += `&filter=${filter}`;
    }

    fetch(baseURL)
      .then((res) => res.json())
      .then((res) =>
        this.setState({ results: res.totalItems > 0 ? res.items : [] })
      );
  }

  render() {
    return (
      <div>
        <main className="App">
          <Header />
          <SearchComponent handleSearch={this.handleSearch} />
          <BookTypeFliter handleFilter={this.handleFilter} />
          <FreeBookFilter handleFilter={this.handleFilter} />

          <ResultsList {...this.state} />
        </main>
      </div>
    );
  }
}
