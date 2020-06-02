import React from "react";
import {connect} from "react-redux";
import '../../styles/reset.css';
import '../../styles/global.css';
import {
    setOptionAction,
    setGenreAction,
    setQueryAction,
    setSortAction,
    setDetailsAction
} from '../../actions/actions';

import {Search} from "../../components/Search/Search";
import Main from '../Main/Main';
//import PrivateRoute from "../../components/PrivateRoute";
import Modal from "../Modal/Modal";

import {
    BrowserRouter as Router,
    Route,
    //Switch,
    //Link,
} from "react-router-dom";

/*
import Login from "../../auth/Login";
import Logout from "../../auth/Logout";
import {fakeAuth} from "../../auth/Auth";
import {Movie} from "../../components/Movie";
*/

class App extends React.Component {
    componentDidMount() {
        this.props.setOption('release_date');
     };

    render() {

        return (
            <Router>
                <Route exact path="/">
                    <div className="App">
                        <Modal genres={this.props.genres}/>
                        <Search setQuery={(query) => this.props.setQuery(query)}
                                selectedMovie={this.props.selectedMovie}
                                showDetails={this.props.showDetails}
                                setDetails={(showDetails) => this.props.setDetails(showDetails)}
                        />
                        <Main/>
                    </div>
                </Route>
            </Router>

        /*<Router>
            <nav className="navbar">
                <Link to="/main"><b>Movies</b></Link>
                <Logout/>
            </nav>
            <Switch>
                <Route exact path="/">
                    <div className="welcome">
                        <Link to="/main">Movies</Link>
                    </div>
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <PrivateRoute path="/main">
                    <div className="App">
                        <Search setQuery={(query) => this.props.setQuery(query)}
                            selectedMovie={this.props.selectedMovie}
                            showDetails={this.props.showDetails}
                            setDetails={(showDetails) => this.props.setDetails(showDetails)}/>
                        <Main
                            movies={this.props.movies}
                            total={this.props.total}
                            offset={this.props.offset}
                            limit={this.props.limit}

                            setSize={(limit) => this.props.setSize(limit)}
                            setPage={(offset) => this.props.setPage(offset)}
                            setMovie={(currentMovie) => this.props.setMovie(currentMovie)/>
                    </div>
                </PrivateRoute>
            </Switch>
        </Router>*/
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedGenre: state.reducer.selectedGenre,
        selectedOption: state.reducer.selectedOption,
        sortOrder: state.reducer.sortOrder,
        selectedMovie: state.reducer.selectedMovie,
        showDetails: state.reducer.showDetails,
        genres: state.reducer.genres,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setGenre: (selectedGenre) => {
            dispatch(setGenreAction(selectedGenre));
        },
        setOption: (selectedOption) => {
            dispatch(setOptionAction(selectedOption));
        },
        setQuery: (query) => {
            dispatch(setQueryAction(query));
        },
        setSort: (sortOrder) => {
            dispatch(setSortAction(sortOrder));
        },
        setDetails: (showDetails) => {
            dispatch(setDetailsAction(showDetails));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);