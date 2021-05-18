import './App.css';
import React from "react"
import NavBar from "./navbar.js"
import Content from "./content.js"
import BlogHome from "./BlogHome.js"
import MyEditor from "./Compose.js"
import Login from "./login.js"
import {Route, Switch } from "react-router-dom";


function App() {

  return (
    <div>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/" component={() => (<Content path="home"/>)} exact/>
          <Route path="/home" component={() => (<Content path="home"/>)} />
          <Route path="/about" component={() => (<Content path="about"/>)} />
          <Route path="/blog" component={() => (<BlogHome path="blog"/>)} />
          <Route path="/compose" component={() => (<MyEditor path="compose"/>)} />
          <Route path="/login" component={() => (<Login path="login"/>)} />
          <Route component={() => (<Content path="/home"/>)} exact/>
        </Switch>
      </div>
      </div>
  );
}

export default App;
