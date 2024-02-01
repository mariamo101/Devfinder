import "./App.css";
import Mode from "./components/mode/Mode";
import Search from "./components/search/Search";
import MainCard from "./components/cardForInformaion/MainCard";
import { useState , useEffect } from "react";

function App() {
  const [textError , setTextError] = useState('');
  const [item , setItem] = useState({});
  const[ mainCar , setMainCard]=useState(true);

  async function userSearch () {
    const response = await fetch("https://api.github.com/users/octocat")
     setItem(await response.json());
  }
 useEffect(() =>{
  userSearch ();
 },[setItem]);

 console.log(item)
 
  return <div className="App">
    <Mode/>
    <p className="error-p"> {textError} </p>
    <Search setTextError={setTextError} setItem={setItem} setMainCard={setMainCard}/>
    {mainCar?  
    <MainCard 
    avatar = {item.avatar_url} 
    company={item.company}
    name={item.name}
    login={item.login}
    joined={item.created_at} 
    bio={item.bio} 
    followers={item.followers}
    repos={item.public_repos} 
    following={item.following} 
    location={item.location}
    blog={item.blog} 
    twitter={item.twitter_usernam}
    />
   : " "
}
  </div>;
}
export default App;


