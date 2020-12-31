import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from "./components/layout/navigation/navigation";
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import Projects from "./views/projects";
import Resume from "./views/resume";
import Footer from "./components/layout/footer/footer";
import './App.css';

function App() {
  return (
    <div className="App outerContainer">
        <Navigation />
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
            <Route exact path="/resume" component={Resume}></Route>
          </Switch>
          <Switch>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
        </Router>
        <Footer />
      
    </div>
  );
}

export default App;
