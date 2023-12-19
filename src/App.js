import "./App.css";
import Flavanoids from "./Components/FlavanoidsTable";
import Gamma from "./Components/GammaTable";

function App() {
  return (
    <div className="App">
      <Flavanoids title={"Flavanoids"} />
      <Gamma title={"Gamma"} />
    </div>
  );
}

export default App;
