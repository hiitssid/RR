import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.scss";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/' className="logo">
          <h2>LOGO</h2>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
