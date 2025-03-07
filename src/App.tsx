import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./components/Experience";

// Components
const Header = styled.header`
  background-color: #1a1a1a;
  padding: 1rem;
  color: white;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: #61dafb;
    }

    span.icon {
      display: none;
    }

    span.text {
      display: inline;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #1a1a1a;
    padding: 1rem;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    a {
      flex-direction: column;
      align-items: center;
      padding: 0.5rem;
      font-size: 0.8rem;
      gap: 0.3rem;

      span.icon {
        display: block;
        font-size: 1.5rem;
      }

      span.text {
        font-size: 0.7rem;
      }
    }
  }
`;

const Main = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

function App() {
  return (
    <Router>
      <div>
        {/* <Header>
          <Nav>
            <Link to="/">
              <span className="icon">🏠</span>
              <span className="text">Home</span>
            </Link>
            <Link to="/about">
              <span className="icon">👤</span>
              <span className="text">About</span>
            </Link>
            <Link to="/projects">
              <span className="icon">💼</span>
              <span className="text">Projects</span>
            </Link>
            <Link to="/contact">
              <span className="icon">✉️</span>
              <span className="text">Contact</span>
            </Link>
            <Link to="/experience">
              <span className="icon">📋</span>
              <span className="text">Experience</span>
            </Link>
          </Nav>
        </Header> */}

        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Main>
      </div>
    </Router>
  );
}

export default App;
