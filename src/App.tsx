import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { ProductList } from './components/ProductList';

function App() {
  
  /**
   *Statefull variable that collect the results from API after filtering
   * setResults will be passed to SearchBar and update with the fitered list in results
  */
  const [results, setResults] = React.useState([]);
  return (
    <div className="App">
      {/* Background Image */}
      <div style={{ backgroundImage: "url(/images/bg.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover', minHeight:'100vh',minWidth:'100vw'}}>
      
      <div className = "search-bar-container">
        <SearchBar setResults = {setResults}></SearchBar>
        <ProductList results = {results}></ProductList>
      </div>
      </div>
    </div>
  );
}

export default App;
