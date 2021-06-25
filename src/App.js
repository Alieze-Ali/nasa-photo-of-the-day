import React from "react";
import "./App.css";

// importing js components to render
// App.js is the main component & holds Header & Photo components

import Header from './components/Header'
import Photo from './components/Photo'

function App() {
  return (
    <div className="App">
  {/* rendering app with 2 main components here */}
        <Header />
        <Photo />
      
    </div>
  );
}

export default App;
