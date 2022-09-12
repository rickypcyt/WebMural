import Content from "./Content";
import Info from "./pages/Info";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WebMural from "./pages/WebMural";
import NotesJS from "./pages/NotesJS";
import { Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Content />}/>
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/WebMural" element={<WebMural />} />
        <Route path="/NotesJS" element={<NotesJS />} />
      </Routes>
    </>
  );
}
export default App;
