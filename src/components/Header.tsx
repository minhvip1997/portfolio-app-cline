import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Device breakpoints
const BREAKPOINTS = {
  iphone12Pro: "390px",
  galaxyS20Ultra: "412px",
  iphone14ProMax: "430px",
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1100;

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    padding: 0 2rem;
  }

  @media (max-width: ${BREAKPOINTS.iphone12Pro}) {
    padding: 0 1.5rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    font-size: 1.4rem;
  }

  @media (max-width: ${BREAKPOINTS.iphone12Pro}) {
    font-size: 1.3rem;
  }
`;

interface MobileNavProps {
  isOpen: boolean;
}

const MobileNavContainer = styled.div<MobileNavProps>`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 1000;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;

  @media (min-width: ${BREAKPOINTS.iphone14ProMax}) {
    position: static;
    transform: none;
    background-color: transparent;
    width: auto;
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  gap: 2rem;

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    background-color: white;
    height: 100%;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    flex-direction: column;
    gap: 0;
  }
`;

const NavLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
  padding: 0.5rem 0;
  position: relative;

  &:hover {
    color: #333;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #333;
    transition: width 0.2s;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    font-size: 1.1rem;
    padding: 1rem 1.5rem;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid #eee;

    &::after {
      display: none;
    }

    &:hover {
      background-color: #f5f5f5;
    }
  }

  @media (max-width: ${BREAKPOINTS.iphone12Pro}) {
    font-size: 1rem;
    padding: 0.9rem 1.2rem;
  }
`;

interface HamburgerProps {
  className?: string;
}

const HamburgerButton = styled.button<HamburgerProps>`
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    display: block;
    width: 30px;
    height: 20px;
    position: relative;

    span {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #333;
      transition: all 0.3s;
      left: 0;

      &:first-child {
        top: ${(props) => (props.className === "active" ? "50%" : "0")};
        transform: ${(props) =>
          props.className === "active" ? "rotate(45deg)" : "none"};
      }

      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
        opacity: ${(props) => (props.className === "active" ? "0" : "1")};
      }

      &:last-child {
        bottom: ${(props) => (props.className === "active" ? "50%" : "0")};
        transform: ${(props) =>
          props.className === "active" ? "rotate(-45deg)" : "none"};
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.iphone12Pro}) {
    width: 25px;
    height: 18px;
  }
`;

type SectionType = "home" | "about" | "experience" | "projects" | "contact";

const SECTIONS: SectionType[] = [
  "home",
  "about",
  "experience",
  "projects",
  "contact",
];

const Header = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = SECTIONS.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Logo>Nhật Minh</Logo>
        <HamburgerButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={isMenuOpen ? "active" : ""}
        >
          <span />
          <span />
          <span />
        </HamburgerButton>
        <MobileNavContainer isOpen={isMenuOpen}>
          <Nav>
            <NavLinks>
              {SECTIONS.map((section: SectionType) => (
                <NavLink
                  key={section}
                  href={`#${section}`}
                  style={{
                    color: activeSection === section ? "#333" : undefined,
                  }}
                  onClick={handleNavClick}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavLink>
              ))}
            </NavLinks>
          </Nav>
        </MobileNavContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
