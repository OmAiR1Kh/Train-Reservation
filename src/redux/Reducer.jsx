/* eslint-disable curly */
/* eslint-disable array-callback-return */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-case-declarations */
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
let users = [];
if (localStorage.getItem("user")) {
  users = JSON.parse(localStorage.getItem("user"));
} else {
  users = [];
}
export const Reducer = (state = { searchState, users }, action) => {
  switch (action.type) {
    case "NOT_SEARCHING":
      return action.payload;
    case "SEARCH_DONE":
      return { ...state, ...action.payload };
    case "NEW_TRAVELER":
      const newTraveller = action.payload;
      const existTraveller = users.find((traveler) => {
        traveler.name === newTraveller.name;
      });
      if (!existTraveller) return { users: [action.payload] };
      break;
    case "GET_TRAVELERS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
