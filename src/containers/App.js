import React from "react";
import {connect} from "react-redux";
import '../App.css';
import {
    setOptionAction,
    setGenreAction,
    setQueryAction,
    setSortAction,
    setSizeAction,
    setPageAction
} from "../actions/actions";

import {Search} from "../components/Search";
import {Main} from '../components/Main';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {Login} from "../components/Login";

class App extends React.Component {
     componentDidMount() {
         this.props.setOption('release_date');
     };

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div>You're not logged in. Please log in to proceed.</div>
                        <button>Log in</button>
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/main">
                    <div className="App">
                        <Search setQuery={(query) => this.props.setQuery(query)}/>
                        <Main
                            movies={this.props.movies}
                            total={this.props.total}
                            offset={this.props.offset}
                            limit={this.props.limit}

                            setSize={(limit) => this.props.setSize(limit)}
                            setPage={(offset) => this.props.setPage(offset)}
                        />
                    </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedGenre: state.reducer.selectedGenre,
        selectedOption: state.reducer.selectedOption,
        movies: state.reducer.movies,
        sortOrder: state.reducer.sortOrder,
        total: state.reducer.total,
        offset: state.reducer.offset,
        limit: state.reducer.limit,
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
        setSize: (limit) => {
            dispatch(setSizeAction(limit));
        },
        setPage: (offset) => {
            dispatch(setPageAction(offset));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);