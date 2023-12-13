import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/contact";
import About from "./Pages/About";
import Project from "./Pages/Project"
import Home from "./Pages/Home";
import Nav from "./componeten/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio-react" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/portfolio-react/home" element={<Home />} />
            <Route path="/portfolio-react/about" element={<About />} />
            <Route path="/portfolio-react/project" element={<Project />} />
            <Route path="/portfolio-react/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;