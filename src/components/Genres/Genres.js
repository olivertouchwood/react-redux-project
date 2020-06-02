import React from "react";
import "./Genres.css"

export class Genres extends React.Component {
    //genres = ['', 'documentary', 'comedy', 'horror', 'crime'];

    render() {
        return (
            <ul className="genres-list">
                {this.props.genres.map((item, index) => {
                    if (item !==''){
                        return <li key={index} onClick={() => this.props.setGenre(item)}>{item}</li>
                    }
                    else {
                        return <li key={index} onClick={() => this.props.setGenre('')}>all</li>
                    }
                })}
            </ul>
        );
    }
}