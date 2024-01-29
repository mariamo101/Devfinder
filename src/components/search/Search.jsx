import '../search/Search.css'
import search from "../assets/icon-search.svg"
import { useState } from 'react';


function Search() {
  const [searchText, setSearchText] = useState('')

  const onChange = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value)
  }
  const onClick =()=>{
    setSearchText(searchText);
    setSearchText('')
    console.log(searchText);
  }
    return <div id="Search">
      <img  src={search} id='search-icon' alt='search-icon'></img>
      <input 
      id='search-input'
      type='text'
      placeholder='Search GitHub username…'
      value={searchText}
      onChange={onChange}
      ></input>
      <button id='search-btn'
      onClick={onClick}
      >Search </button>
    </div>;
  }
  
  export default Search;
  