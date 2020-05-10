import React from "react";

export class Search extends React.Component {
    query = '';

    handleChange = (event) => {
        this.query = event.target.value;
        console.log(this.query);
    };

    render() {
        return (

                    <div className="header">
                        <input placeholder="What do you want to watch?"
                               className="search"
                               onChange={this.handleChange}
                               onKeyPress={ (event) => {if (event.key === 'Enter'){this.props.setQuery(this.query)}} }
                        ></input>
                        <button className="btn-search"
                                onClick={() => {this.props.setQuery(this.query)}}
                        >Search</button>
                    </div>
        );
    }
}