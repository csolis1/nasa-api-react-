import React, { useState, useEffect } from "react";
import HttpClient from "./HttpClient";


const App = () => {
    const [apod, setApod] = useState ({})

    useEffect (() => {
      HttpClient.getApod().then(apodData => {
        setApod (apodData.data)
      })
    }, [])
  
  return (
    <div style ={{ maxWidth: 900, padding: 30 }}>
      <h1>NASA API</h1>
      <h2>Astronomy Picture of the Day</h2>
      {apod && (
        <article>
          <header className="App-header">
              {apod.title} - <i>{apod.date}</i>
          </header>
          <img src={apod.url} alt="APOD" width ="800" height="auto" />
          <p>{apod.explanation}</p>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrape: "break-word",
            }}
          >
            <hr /> 
              {JSON.stringify(apod, null, 2)}
          </pre>
      </article>
      )}
    </div>
  );
}

export default App;
