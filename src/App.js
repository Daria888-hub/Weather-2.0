import Weather from "./Weather";
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity= "Brisbane"/>
      
      <footer>
       <p>Created by Daria Lee {"  "}
     < a href="https://github.com/Daria888-hub/Weather-2.0" target="_blank">Open sourse</a> 
     </p>
     </footer>
      </div>
    </div>
    
  );
}

export default App;
