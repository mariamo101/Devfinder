import "../mode/Mode.css";
import { useEffect , useState } from "react";
import sun from "../assets/icon-sun.svg"
import moon from "../assets/icon-moon.svg"

function Mode() {
  const[isDark , setIsDark]=useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#141d2f' : '#F6F8FF'; 
    
    
  }, [isDark]);

  function onClick (){
    setIsDark(!isDark);  
    document.body.classList.toggle("dark-mode");
  }

    return <div id="Mode">
      <h1 id="title"> devfinder</h1>
  <button id="Mode-Btn" onClick={onClick}> 
  {isDark ? (
    <>
    LIGHT
    <img src={sun} className="mode-icon" alt="sun-icon"/>
    </>
  ) : (
    <>
    DARK
    <img src={moon}  className="mode-icon" alt="moon-icon"  />
  </>

  )}
   </button>    
    </div>;
  }
  
  export default Mode;

