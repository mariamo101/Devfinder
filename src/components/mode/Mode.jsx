import "../mode/Mode.css";
import { useEffect , useState } from "react";
import sun from "../assets/icon-sun.svg"

function Mode() {
  const[isDark , setIsDark]=useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#141d2f' : '#F6F8FF'; 
  }, [isDark]);



  function onClick (){
    setIsDark();  
  }
    return <div className="Mode">
      <h1 id="title"> devfinder</h1>
  <button id="Mode-Btn" onClick={onClick}> 
  LIGHT
   <img src={sun} className="mode-icon" alt="sun-icon"/>
   </button>    
    </div>;
  }
  
  export default Mode;