import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Components
const Header = styled.header`
  background-color: #1a1a1a;
  padding: 1rem;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #61dafb;
    }
  }
`;

const Main = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <div>
        <Header>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Header>

        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
      </div>
    </Router>
  );
}

export default App;
