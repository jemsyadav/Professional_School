import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar1 from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Benifits from "./Pages/Benifits";
import OurTeam from "./Pages/OurTeam";
import Certificates from "./Pages/Certificates";
import School_History from "./Pages/School_History";
import Overview from "./Pages/Overview";
import Contact from "./Pages/Contact";
import ControlPannelHome from "./Pages/ControlPannelHome";
import Facultiy from "./Pages/Facultiy";
import ControlPannelStudents from "./Pages/ControlPannelStudents";
import ControlPannelCourse from "./Pages/ControlPannelCourse";
import ControlPannelRegistation from "./Pages/ControlPannelRegistation";
import ControlPannelAnnouncements from "./Pages/ControlPannelAnnouncements";
import ControlPannelFormFaq from "./Pages/ControlPannelFormFaq";
import My_Profile from "./Pages/My_Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/controlpannelhome" element={<Home />} />
          <Route path="/faculity" element={<Facultiy />} />
          <Route path="/students" element={<ControlPannelStudents />} />
          <Route path="/course" element={<ControlPannelCourse />} />
          <Route path="/form&faq" element={<ControlPannelFormFaq />} />
          <Route path="/myprofile" element={<My_Profile />} />
          <Route
            path="/announcments"
            element={<ControlPannelAnnouncements />}
          />

          <Route path="/registation" element={<ControlPannelRegistation />} />

          <Route path="/" element={<ControlPannelHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/benifits" element={<Benifits />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/school" element={<School_History />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
