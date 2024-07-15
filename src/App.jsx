import "./App.css";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Navbarpage from "./components/navbar/Navbarpage";
import Homepage from "./components/home/Homepage";
import Aboutpage from "./components/about/Aboutpage";
import Contactpage from "./components/contact/Contactpage";
import Skillspage from "./components/skills/Skillspage";
import Educationpage from "./components/education/Educationpage";
import 'bootstrap/dist/css/bootstrap.min.css'
import Modet from "./components/motiondetection/Modet";

function App() {
  return (
    <Router>
      <div>
        <Navbarpage></Navbarpage>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/about" element={<Aboutpage />}></Route>
          <Route path="/contact" element={<Contactpage />}></Route>
          <Route path="/skills" element={<Skillspage/>}></Route>
          <Route path="/education" element={<Educationpage/>}></Route>
          <Route path="/modet" element={<Modet/>}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
