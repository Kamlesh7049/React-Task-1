// import { useState } from "react";
// const App=()=>{
//   const [color,setColor]=useState("Red");
  
//   return(
//     <>
    
//     <h1 style={{color:color}}>My favourite color:{color}</h1>
//     <button onClick={()=>{setColor("green")}}>Green</button>
//     <button onClick={()=>{setColor("orange")}}>orange</button>
//     <button onClick={()=>{setColor("aqua")}}>aqua</button>
//     <button onClick={()=>{setColor("blue")}}>blue</button>
//     </> 
//   )
// }
// export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Dependency-based useEffect: Runs when `query` changes
  useEffect(() => {
    // Only run the effect if the `query` is not empty
    if (query) {
      // Simulating a data fetch based on the search query
      axios.get(`http://localhost:3000/employees?q=${query}`)
        .then(response => {
          setResults(response.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    } else {
      setResults([]); // Clear results if the query is empty
    }
  }, [query]); // `query` is the dependency

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full screen height
        flexDirection: 'column'
      }}
    >
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', textAlign: 'center' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query on input change
          placeholder="Search..."
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxSizing: 'border-box'
          }}
        />
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {results.length > 0 ? (
            results.map((item, index) => (
              <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                {item.name}
              </li>
            ))
          ) : (
            <li style={{ padding: '10px' }}>No results found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
