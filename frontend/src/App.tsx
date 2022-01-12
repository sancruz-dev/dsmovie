import Navbar from "./components/Navbar";

function App() {

  fetch(process.env.REACT_APP_API_URL || 'http://localhost:3000')
      .then(() => console.log("DEU CERTO !!!"))
      .catch(() => console.log("DEU ERRO"))

  return (
    <Navbar />
  );
}

export default App;
