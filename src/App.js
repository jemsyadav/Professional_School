
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar1 from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Benifits from './Pages/Benifits';
import OurTeam from './Pages/OurTeam';
import Certificates from './Pages/Certificates';
import School_History from './Pages/School_History';

function App() {
  return (
   <div>


  <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/benifits' element={<Benifits/>}/>
    <Route path='/ourteam' element={<OurTeam/>}/>
    <Route path='/certificates' element={<Certificates/>}/>
    <Route path='/school' element={<School_History/>}/>
     

    </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;