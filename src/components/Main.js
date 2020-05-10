import React from "react";
import {Movie} from "./Movie";
import Filter from "../containers/Filter";
import {Pagination} from "./Pagination";

export class Main extends React.Component {
    render() {
        if (this.props.movies.length > 0) {
            return (
                <div className="main">
                    <div className="total"><b>{this.props.total}</b> {this.props.total === 1 ? 'movie' : 'movies'} found</div>
                    <Filter/>
                    <div className="movies-list">
                        {Array.from(this.props.movies).map((item) => {
                            return <Movie key={item.id} title={item.title} release_date={item.release_date}
                                          genres={item.genres} poster_path={item.poster_path}/>
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