import React from "react";
import "./App.css";

//importing js components to render

import Header from './components/Header'
import Photo from './components/Photo'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>
        </p>
        {/* importing components here */}
        <Header />
        <Photo />
      
    </div>
  );
}

export default App;
