import "./App.css";
import Dropdown from "./package/Dropdown";

function App() {
  return (
    <div className="App">
      <Dropdown
        id="college"
        list="college"
        label="Enter your location"
        placeholder="Enter location"
        isRequired={true}
      />
      <Dropdown
        id="uct"
        list="uct"
        label="Enter your location"
        placeholder="Enter location"
        isRequired={true}
      />
    </div>
  );
}

export default App;
