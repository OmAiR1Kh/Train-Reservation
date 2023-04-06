/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import Search from '../../Components/SearchResults/Search';
import SearchResults from '../../Components/SearchResults/SearchResults';
import './results.css'

const Results = () => {
  return (
    <>
      <div className="results-container">
        <Search />
        <SearchResults />
      </div>
    </>
  );
};

export default Results;
