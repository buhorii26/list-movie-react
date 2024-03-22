import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import { getMovie } from "../utils/data";
import PropTypes from "prop-types";

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: getMovie(props.id),
    };
  }

  render() {
    if (this.state.movie === null) {
      return <p>Movie is not found!</p>;
    }
    return (
      <section>
        <MovieDetail {...this.state.movie} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.number.isRequired,
};

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={Number(id)} />;
}
export default DetailPageWrapper;
