import React from "react";
import {useHistory} from "react-router-dom";
import {fakeAuth} from "../../auth/Auth";
import './Search.css';

export class Search extends React.Component {
    query = '';

    handleChange = (event) => {
        this.query = event.target.value;
        console.log(this.query);
    };

    handleClick(){
        fakeAuth.signout(() => {useHistory().push('/') })
    };

    render() {
        let content;
        if (this.props.showDetails){
            content = <div className="details">
                <div className="icon-search"
                     onClick={() => {
                         if (this.props.showDetails){
                             this.props.setDetails(!this.props.showDetails)
                         }
                     }}>🔍</div>
                <div className="details-wrapper">
                    <img src={this.props.selectedMovie.poster_path}/>
                    <div className="details-text-wrapper">
                        <div className="heading-wrapper">
                            <h1 className="details-heading">{this.props.selectedMovie.title}</h1>
                            <div className="details-rating"><h3>{this.props.selectedMovie.vote_average}</h3></div>
                        </div>
                        <div className="details-numbers-wrapper">
                            <div className="year"><h3>{this.props.selectedMovie.release_date ? this.props.selectedMovie.release_date.slice(0, 4) : 0}</h3></div>
                            <div className="duration"><h3>{this.props.selectedMovie.runtime ? this.props.selectedMovie.runtime : 0} min</h3></div>
                        </div>
                        <div className="details-description">{this.props.selectedMovie.overview}</div>
                    </div>
                </div>
            </div>
        } else {
            content = <div className="header-wrapper">
                <button className="btn btn-add">+ Add Movie</button>
                <div className="search-wrapper">
                    <input placeholder="What do you want to watch?"
                           className="search"
                           onChange={this.handleChange}
                           onKeyPress={ (event) => {if (event.key === 'Enter'){this.props.setQuery(this.query)}} }
                    ></input>
                    <button className="btn btn-search"
                            onClick={() => {this.props.setQuery(this.query)}}
                    >Search</button>
                </div>
            </div>
        }

        return (
            <div className="header">
                {content}
            </div>
        );
    }
}