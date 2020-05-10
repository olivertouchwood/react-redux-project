import React from "react";

export class Movie extends React.Component {
    render() {
        return (
            <div className="movie">
                <img src={this.props.poster_path}/>
                <div className="info">
                    <p className="title">{this.props.title}</p>
                    <p className="date">{this.props.release_date.slice(0, 4)}</p>
                    <p className="movie-genres">{this.props.genres.slice(0, 3).join(', ')}</p>
                </div>
            </div>
    )}
}