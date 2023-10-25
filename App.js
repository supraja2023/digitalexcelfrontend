
import './App.css';
import AddControls from './Components/AddControls'
import DisplayControls from './Components/DisplayControls'
import EditControls from './Components/EditControls' 
import Editsub from './Components/Editsub'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
function App() {
  return (
    <>
  <NavBar/>
    {/* <Router>
      <Routes>
        <Route path="/add" element={<AddControls />} />
        <Route path="/view" element={<EditControls />} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
