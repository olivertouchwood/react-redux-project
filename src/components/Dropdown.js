import React from "react";

export class Dropdown extends React.Component {
    options = [
        {
            id: 'release_date',
            name: 'Release date'
        },
        {
            id: 'vote_average',
            name: 'Average rate'
        },
        {
            id: 'vote_count',
            name: 'Most rated'
        }
    ];

    render() {
        return (
            <div className="dropdown">{this.options.map((item, index) => {
                    return <li className="option" key={index}
                               onClick={() => {
                                   this.props.setOption(item.id);
                                   this.props.setDropdown(!this.props.showDropdown)
                               }}
                               >{item.name}</li>
                })}
            </div>
        );
    }
}