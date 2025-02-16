import './App.css';
import sampleVideo from "./dsd.mp4";

function App() {
  return (
    <div className="App">
      <h2>Dark Sky Destinations</h2>
      <div className='body'>
        <div className="text">
          <p>
            Dark Sky Destinations is an app for stargazing enthusiasts and astronomy lovers. The app offers 5 main features:
          </p>
          <ol>
            <li>
              <strong>Astronomical Events Calendar</strong>
              <ul>
                <li>Stay updated with major celestial events such as meteor showers, eclipses, and planetary alignments.</li>
              </ul>
            </li>
            <li>
              <strong>Nearby Stargazing Destinations</strong>
              <ul>
                <li>Discover the best stargazing spots near you and mark selected ones as favorite places.</li>
                <li>Access detailed addresses, reviews, and total user ratings.</li>
              </ul>
            </li>
            <li>
              <strong>Moon Phases and Lunar Cycles</strong>
              <ul>
                <li>Check detailed moon cycles for any date, including new moon, full moon, and specific lunar phases.</li>
                <li>Get insights on the best stargazing days, avoiding dates with too much moonlight.</li>
                <li>Visualize the moon's position in the night sky for selected dates.</li>
              </ul>
            </li>
            <li>
              <strong>Personalized Favorites List</strong>
              <ul>
                <li>View your favorite stargazing locations and their details.</li>
              </ul>
            </li>
            <li>
              <strong>Astronomy Picture of the Day</strong>
              <ul>
                <li>Enjoy NASA's breathtaking Astronomy Picture of the Day, with detailed explanations and stories behind each image.</li>
              </ul>
            </li>
          </ol>
        </div>
        <video width="700" height="700" controls>
          <source src={sampleVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
