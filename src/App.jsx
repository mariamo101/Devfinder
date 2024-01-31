import "./App.css";
import Mode from "./components/mode/Mode";
import Search from "./components/search/Search";
import MainCard from "./components/cardForInformaion/MainCard";
import { useState } from "react";

const octocat = {
avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
bio: null,
blog: "https://github.blog",
company: "@github",
created_at: "2011-01-25T18:44:36Z",
email: null,
events_url: "https://api.github.com/users/octocat/events{/privacy}",
followers: 12070,
followers_url: "https://api.github.com/users/octocat/followers",
following: 9,
following_url: "https://api.github.com/users/octocat/following{/other_user}",
gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
gravatar_id: "",
hireable: null,
html_url: "https://github.com/octocat",
id: 583231,
location: "San Francisco",
login: "octocat",
name: "The Octocat",
node_id: "MDQ6VXNlcjU4MzIzMQ==",
organizations_url: "https://api.github.com/users/octocat/orgs",
public_gists: 8,
public_repos: 8,
received_events_url: "https://api.github.com/users/octocat/received_events",
repos_url: "https://api.github.com/users/octocat/repos",
site_admin: false,
starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
twitter_usernam: null,
type: "User",
updated_at: "2024-01-22T12:23:59Z",
url: "https://api.github.com/users/octocat"
}

function App() {
  const [textError , setTextError] = useState('');
  const [item , setItem] = useState({});

  return <div className="App">
    <Mode/>
    <p className="error-p"> {textError} </p>
    <Search setTextError={setTextError} item={item} setItem={setItem} />
    <MainCard avatar = {octocat.avatar_url}/>
  </div>;
}

export default App;
