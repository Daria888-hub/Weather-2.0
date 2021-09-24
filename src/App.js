import Weather from "./Weather";
import "./App.css"

function App() {
  return (
    <div className="App" >
      <div className="container">
        
        <Weather defaultCity= "Brisbane"/>
      
      <footer>
       <p>Created by Daria Lee {"  "}
     < a href="https://github.com/Daria888-hub/Weather-2.0" target="_blank" rel="noopener noreferrer">Open sourse</a> hosted on <a href="https://dazzling-allen-dfaba1.netlify.app">Netlify</a>
     </p>
     </footer>
      </div>
    </div>
    
  );
}

export default App;
