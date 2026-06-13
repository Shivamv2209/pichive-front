import {Routes,Route} from "react-router-dom"
import LandingPage from "./pages/Landing_Page";
import CreateEventPage from "./pages/CreateEventPage";

function App(){
  return(
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create-event" element={<CreateEventPage />} />
    </Routes>
  )
}

export default App;