import React from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { searchMovies } from "../utils/data";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

function SearchPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <SearchPage onSearch={changeSearchParams} />;
}

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundMovies: [],
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        foundMovies: searchMovies(keyword),
      };
    });
    this.props.onSearch(keyword);
  }

  render() {
    return (
      <section>
        <h2>Search Movie</h2>
        <SearchBar search={this.onSearch} />
        <MovieList movies={this.state.foundMovies} />
      </section>
    );
  }
}

SearchPage.propTypes = {
  onSearch: PropTypes.string.isRequired,
};

export default SearchPageWrapper;
