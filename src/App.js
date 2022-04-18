import React from 'react'

// Import data
import {postings} from "./postings.js"

// Import components
import './App.css';
import Directory from "./directory"
import Gallery from './gallery';
import Searchbar from './searchbar';
import Sidebar from './sidebar';

function App(){
  return (
    <div>
      <h1>Craigslist</h1>
      <div className="App">
        <Sidebar></Sidebar>
        <Searchbar></Searchbar>
        <Directory></Directory>
        <Gallery posting={postings}></Gallery>
      </div>
    </div>
  );
}

export default App;
