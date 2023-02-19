import "./App.css";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { createContext, useContext, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const AuthContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);

  function toggleAuth() {
    setIsAuth(!isAuth);
    console.log(isAuth);
  }

  return (
    <AuthContext.Provider value={toggleAuth}>
      <div className="App">
      {isAuth ? 
        <Router>
          <NavBar2 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/signin" element={<SignIn/>}/>
          </Routes>
          <Footer />
        </Router>
        : 
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<SignIn/>}/>
          </Routes>
          <Footer />
        </Router>
      }

      </div>
    </AuthContext.Provider>
    
  );
}

export default App;


