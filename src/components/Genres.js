import React from "react";

export class Genres extends React.Component {
    genres = ['', 'documentary', 'comedy', 'horror', 'crime'];

    render() {
        return (
            <div className="genres-list">
                {this.genres.map((item, index) => {
                    if (item !==''){
                        return <div key={index} onClick={() => this.props.setGenre(item)}>{item}</div>
                    }
                    else {
                        return <div key={index} onClick={() => this.props.setGenre('')}>all</div>
                    }
                })}
            </div>
        );
    }
}