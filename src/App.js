// Import data
import Directory from './directory';
import Gallery from './gallery';
import Searchbar from './searchbar';
import Sidebar from './sidebar';

// Import components
import './App.css';

function App(){
  return (
    <div>
      <h1>Craigslist</h1>
      <div className="App">
        <Sidebar></Sidebar>
        <Searchbar></Searchbar>
        {/* <Directory></Directory> */}
        <Gallery></Gallery>
      </div>
    </div>
  );
}

export default App;
