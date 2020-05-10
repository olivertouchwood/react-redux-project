import React from "react";
import {Genres} from "../components/Genres";
import {Options} from "../components/Options";
import {connect} from "react-redux";
import {
    setOptionAction,
    setGenreAction,
    setSortAction, showDropdownAction
} from "../actions/actions";

class Filter extends React.Component {
    render() {
        return (
            <div className="filter">
                <Genres setGenre={(item) => this.props.setGenre(item)}/>
                <Options
                    setOption={(item) => this.props.setOption(item)}
                    sortOrder={this.props.sortOrder}
                    setSort={(sortOrder) => this.props.setSort(sortOrder)}
                    selectedOption={this.props.selectedOption}
                    showDropdown={this.props.showDropdown}
                    setDropdown={(showDropdown) => this.props.setDropdown(showDropdown)}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        selectedGenre: state.reducer.selectedGenre,
        selectedOption: state.reducer.selectedOption,
        sortOrder: state.reducer.sortOrder,
        showDropdown: state.reducer.showDropdown,
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
        setSort: (sortOrder) => {
            dispatch(setSortAction(sortOrder));
        },
        setDropdown: (showDropdown) => {
            dispatch(showDropdownAction(showDropdown));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);