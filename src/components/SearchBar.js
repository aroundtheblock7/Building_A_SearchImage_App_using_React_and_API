import { useState } from 'react';
import "./SearchBar.css";

function SearchBar({ onEnter }) {

  const [term, setTerm] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onEnter(term)
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  //The input has nothing to do with the App. All of the changes are being handled within this Search component
  //On the other hand.. submitting the form is passing the data to App component
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <h1>Enter Search Term</h1>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default SearchBar;
