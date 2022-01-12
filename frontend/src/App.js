
function App() {
   fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
      .then(() => console.log("DEU CERTO !!!"))
      .catch(() => console.log("DEU ERRO"))

   return (
      <div className="App">
         <header className="App-header">
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
