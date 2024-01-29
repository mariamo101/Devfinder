import "./App.css";
import Mode from "./components/mode/Mode";
import Search from "./components/search/Search";
import MainCard from "./components/cardForInformaion/MainCard";
import { useState } from "react";




function App() {

  const [textError , setTextError] = useState('');

  return <div className="App">
    <Mode/>
    <p className="error-p"> {textError} </p>
    <Search setTextError={setTextError} />
    <MainCard/>
  </div>;
}

export default App;
