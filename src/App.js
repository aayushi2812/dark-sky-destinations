import logo from './logo.svg';
import './App.css';
import sampleVideo from "./dsd.mp4";

function App() {
  return (
    <div className="App">
      <h2>Android Mobile Application - Dark Sky Destinations</h2>
      <video width="100%" height="700" controls>
      <source src={sampleVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  );
}

export default App;
