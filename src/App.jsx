import {Routes,Route} from "react-router-dom"
import LandingPage from "./pages/Landing_Page";
import CreateEventPage from "./pages/CreateEventPage";
import EventPage from "./pages/EventPage";
import UploadPhotosPage from "./pages/UploadPhotosPage";
import ConfirmUploads from "./pages/ConfirmUploads";
import SearchPage from "./pages/SearchPage";
import ResultsPage from "./pages/ResultsPage";

function App(){
  return(
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create-event" element={<CreateEventPage />} />
      <Route path="/:event_code" element={<EventPage />} />
      <Route path="/upload/photos/:event_code" element={<UploadPhotosPage />} />
      <Route path="/uploads/:event_code/confirm" element={<ConfirmUploads />} />
      <Route path="/search/:event_code" element={<SearchPage />} />
      <Route path="/photos/:event_code" element={<ResultsPage />} />
    </Routes>
  )
}

export default App;