import '../search/Search.css'
import search from "../assets/icon-search.svg"
import { useState } from 'react';

function Search({setTextError , setItem}) {
   const [searchText, setSearchText] = useState('')

   async function userSearch () {
    const response = await fetch("https://api.github.com/users/" +searchText)
     setItem(await response.json());
     if(response.status === 404){
      setTextError("No results");
      setSearchText("");
     }else{
      setTextError("");
    }
     }
  const onChange = (e) => {
    setSearchText(e.target.value);
  }
    return <div id="Search">
      <img  src={search} id='search-icon' alt='search-icon'></img>
      <input 
      id='search-input'
      type='text'
      placeholder='Search GitHub username…'
      value={searchText}
      onChange={onChange}>
      </input>
      <button 
      id='search-btn'
      onClick={userSearch}> Search 
        </button>
    </div>;
  }
  
  export default Search;
  