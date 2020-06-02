import axios from "axios";

export function setMoviesAction() {
  return (dispatch, getState) => {
      const option = getState().reducer.selectedOption;
      const genre = getState().reducer.selectedGenre;
      const query = getState().reducer.query;
      const sortOrder = getState().reducer.sortOrder;
      const limit = getState().reducer.limit;
      const offset = getState().reducer.offset;
      return axios.get(`http://localhost:4000/movies?limit=${limit}&sortBy=${option}&sortOrder=${sortOrder}&filter=${genre}&search=${query}&searchBy=title&offset=${offset}`)
          .then(res => {
              dispatch({
                  type: "GET_MOVIES",
                  payload: res.data.data
              });
              dispatch({
                  type: "GET_TOTAL",
                  payload: res.data.totalAmount
              });
              console.log(getState());
          });
  };
}

export function setOptionAction(selectedOption) {
    return dispatch => {
        dispatch({
            type: "OPTIONS",
            payload: selectedOption
        });
        dispatch(setMoviesAction());
    };
}

export function setGenreAction(selectedGenre) {
    return dispatch => {
        dispatch ({
            type: "GENRE",
            payload: selectedGenre
        });
        dispatch(setMoviesAction());
    };
};

export function setQueryAction(query) {
    return dispatch => {
        dispatch ({
            type: "QUERY",
            payload: query
        });
        dispatch(setMoviesAction());
    };
};

export function setSortAction(sortOrder) {
    return dispatch => {
        dispatch ({
            type: "SORT_ORDER",
            payload: sortOrder
        });
        dispatch(setMoviesAction());
    }
};

export function setSizeAction(limit) {
    return dispatch => {
        dispatch ({
            type: "SET_SIZE",
            payload: limit
        });
        dispatch(setMoviesAction());
    }
};

export function setPageAction(offset) {
    return dispatch => {
        dispatch ({
            type: "SET_PAGE",
            payload: offset
        });
        dispatch(setMoviesAction());
    }
};

export function showDropdownAction(showDropdown){
    return dispatch => {
        dispatch ({
            type: "SHOW_DROPDOWN",
            payload: showDropdown
        })
    }
};

export function setMovieAction(selectedMovie) {
    return dispatch => {
        dispatch ({
            type: "SET_MOVIE",
            payload: selectedMovie
        });
    }
};

export function setDetailsAction(showDetails) {
    return dispatch => {
        dispatch ({
            type: "SHOW_DETAILS",
            payload: showDetails
        });
    }
};