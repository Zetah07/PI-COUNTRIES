import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Create from "./components/Create/Create";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/home/:id">
        <Detail />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
    </div>
  );
}

export default App;
