import React from 'react';
import Navigation from "./components/layout/navigation/navigation";
import Footer from "./components/layout/footer/footer";
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App outerContainer">
        <Navigation />
        <Outlet />
        {/* if I want to pass data */}
        {/* <Outlet context={data} /> */}
        <Footer />
    </div>
  );
}

export default App;
