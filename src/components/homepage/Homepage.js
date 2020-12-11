import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import VideoGallery from "./VideoGallery";


function App() {

  return (
    <div className="Homepage">
      <Navbar />
      <div className = "homepage-container" >
        <Sidebar />
        <VideoGallery />
      </div>  
    </div>
  );
}

export default App;
