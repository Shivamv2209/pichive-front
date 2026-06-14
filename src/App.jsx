import {Routes,Route} from "react-router-dom"
import LandingPage from "./pages/Landing_Page";
import CreateEventPage from "./pages/CreateEventPage";
import EventPage from "./pages/EventPage";
import UploadPhotosPage from "./pages/UploadPhotosPage";

function App(){
  return(
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create-event" element={<CreateEventPage />} />
      <Route path="/:event_code" element={<EventPage />} />
      <Route path="/upload/photos/:event_code" element={<UploadPhotosPage />} />
    </Routes>
  )
}

export default App;