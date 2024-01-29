import '../search/Search.css'
import search from "../assets/icon-search.svg"
import { useState , useEffect } from 'react';


//`https://api.github.com/users/:username`
// "https://api.github.com/users/octocat"


function Search({setTextError}) {
  const [item , setItem] = useState({})

  async function userSearch () {
     let response = await fetch("https://api.github.com/users/octocat")
      setItem(await response.json());
  }
  console.log(item);

  const [searchText, setSearchText] = useState('')

  useEffect(() =>{
    if(searchText === "text"){
      setTextError("No results");
    }else{
      setTextError("")
    }

  },[searchText]);

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
      onClick={userSearch}
      >Search </button>
    </div>;
  }
  
  export default Search;
  