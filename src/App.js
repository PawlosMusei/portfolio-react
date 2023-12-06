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
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;