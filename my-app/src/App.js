import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Feed from "./Components/Feed/Feed";
import VideoDetail from "./Components/VideoDetail/VideoDetail";
import AudioDetail from "./Components/AudioDetail/AudioDetail";
import SearchFeed from "./Components/SearchFeed/SearchFeed";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/audio/:id" element={<AudioDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
