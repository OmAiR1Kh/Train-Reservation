/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

let searchState;
if (localStorage.getItem("search-data")) {
  searchState = JSON.parse(localStorage.getItem("search-data"));
} else {
  searchState = null;
}

export const Reducer = (state = { searchState }, action) => {
  switch (action.type) {
    case "NOT_SEARCHING":
      return action.payload;
    case "SEARCH_DONE":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
