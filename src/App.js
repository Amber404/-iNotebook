import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar></Navbar>
      <Alert></Alert>
      <div className="container">
        <Routes>
      
        <Route  path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
        
        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
