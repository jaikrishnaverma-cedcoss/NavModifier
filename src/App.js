import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';
import Feedback from './component/Feedback';
// import Event from './component/Event';
import Gallery from './component/Gallery';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     
          <BrowserRouter>
          <Nav/>
      <Routes>
    
          <Route index element={<Home />} />
          <Route path="Products" element={<Gallery />} />
          <Route path="Contact" element={<Feedback />} />
        
      </Routes>
    </BrowserRouter>
   
    </div>

  );
}

export default App;
