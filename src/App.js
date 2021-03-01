
import './App.css';
import BackgroundAttactment from './BackgroundAttactment/BackgroundAttactment';
import Header from './Header/Header';
import SongImage from './SongImage/SongImage';
import Sponsor from './Sponsor/Sponsor';
import VideoBackground from './VideoBackground/VideoBackground';

function App() {
  return (
    <div className="App">
     <Header/>
     <VideoBackground/>
     <SongImage/>
     <BackgroundAttactment/>
     <Sponsor/>
    </div>
  );
}

export default App;
