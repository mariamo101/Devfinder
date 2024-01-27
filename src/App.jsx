import "./App.css";
import Mode from "./components/mode/Mode";
import Search from "./components/search/Search";
import MainCard from "./components/cardForInformaion/MainCard";



function App() {
  return <div className="App">
    <Mode/>
    <Search/>
    <MainCard/>
  </div>;
}

export default App;
