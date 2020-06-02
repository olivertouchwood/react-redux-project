import React from "react";
import {Dropdown} from "../Dropdown/Dropdown";
import "./Options.css"

export class Options extends React.Component {
    sortOptionsMap = {
        'release_date': 'Release Date',
        'vote_average': 'Average Rate',
        'vote_count': 'Most Rated'
    };

    render() {
        let arrow;
        if (this.props.sortOrder === 'desc'){
            arrow = <i className="arrow down"></i>;
        } else {
            arrow = <i className="arrow up"></i>;
        };


        let dropdown;
        if (this.props.showDropdown === true){
            dropdown = <Dropdown setOption={this.props.setOption}
                                 showDropdown={this.props.showDropdown}
                                 setDropdown={(showDropdown) => this.props.setDropdown(showDropdown)}
            />
        };


        return (
            <div className="sort">
                <div>Sort by: </div>
                <div className="selected-option"
                     onClick={() => this.props.setDropdown(!this.props.showDropdown)}
                >{this.sortOptionsMap[this.props.selectedOption]}</div>
                <div className="arrow-wrapper" onClick={() => {this.props.setSort(this.props.sortOrder === 'asc' ? 'desc' : 'asc')}}>{arrow}</div>
                {dropdown}
            </div>
        );
    }
}