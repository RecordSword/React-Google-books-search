import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav"
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Nav></Nav>
        <Jumbotron></Jumbotron>
          <Route exact path="/" component={Search}></Route>
          <Route exact path="/saved" component={Saved}></Route>
      </Router>
    </div>
  );
}

export default App;
