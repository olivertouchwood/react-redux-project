import React from "react";
import {Movie} from "../../components/Movie/Movie";
import Filter from "../Filter/Filter";
import {Pagination} from "../../components/Pagination/Pagination";
import {
    setDetailsAction,
    setMovieAction,
    setPageAction,
    setSizeAction,
    showDetailsAction,
} from "../../actions/actions";
import {connect} from "react-redux";
import "./Main.css"

class Main extends React.Component {
    render() {
        if (this.props.movies.length > 0) {
            return (
                <div className="main">
                    <div className="total"><b>{this.props.total}</b> {this.props.total === 1 ? 'movie' : 'movies'} found</div>
                    <Filter/>

                    <div className="movies-list">
                        {Array.from(this.props.movies).map((item) => {
                            return <Movie key={item.id} id={item.id} title={item.title} release_date={item.release_date}
                                          genres={item.genres} poster_path={item.poster_path}
                                          movies={this.props.movies}
                                          setMovie={(selectedMovie) => this.props.setMovie(selectedMovie)}
                                          showDetails={this.props.showDetails}
                                          setDetails={(showDetails) => this.props.setDetails(showDetails)}
                            />
                        })}
                    </div>
                    <Pagination
                        total={this.props.total}
                        offset={this.props.offset}
                        limit={this.props.limit}

                        setSize={(limit) => this.props.setSize(limit)}
                        setPage={(offset) => this.props.setPage(offset)}
                    />
                </div>
            )
        } else {
            return (
                <div className="main">
                    <div className="no-results">
                        <h1>Nobody here but us chickens!</h1>
                        <h3>Try something else.</h3>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.reducer.movies,
        total: state.reducer.total,
        offset: state.reducer.offset,
        limit: state.reducer.limit,
        selectedMovie: state.reducer.selectedMovie,
        showDetails: state.reducer.showDetails,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSize: (limit) => {
            dispatch(setSizeAction(limit));
        },
        setPage: (offset) => {
            dispatch(setPageAction(offset));
        },
        setMovie: (selectedMovie) => {
            dispatch(setMovieAction(selectedMovie));
        },
        setDetails: (showDetails) => {
            dispatch(setDetailsAction(showDetails));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);