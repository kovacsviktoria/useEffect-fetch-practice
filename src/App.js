import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async ()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setData(data.splice(0, 10));
    })();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.body}</li>
        })}
      </ul>
    </div>
  )
;
}

export default App;


//useEffect with .then
// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => setData(data.splice(0, 10)));
// }, []);