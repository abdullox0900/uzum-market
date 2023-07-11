import {Routes, Route, NavLink} from "react-router-dom"
import './App.css'
import Home from './pages/home'
import About from "./pages/about";

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
    </>
  );
}

export default App;
