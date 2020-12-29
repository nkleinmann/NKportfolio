import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navigation from "./components/layout/navigation/navigation";
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import Projects from "./views/projects";
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation></Navigation>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
          <Switch>
            <Route exact path="/projects" component={Projects}></Route>
          </Switch>
          <Switch>
            <Route exact path="/about" component={About}></Route>
          </Switch>
          <Switch>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
