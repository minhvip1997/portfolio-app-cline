import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GithubIcon from "../assets/icons/GithubIcon";
import Header from "../components/Header";
import profilePhoto from "../assets/images/minh.jpg";
import About from "./About";
import Experience from "../components/Experience";
import Projects from "./Projects";
import Contact from "./Contact";

// Device breakpoints
const BREAKPOINTS = {
  iphone12Pro: "390px",
  galaxyS20Ultra: "412px",
  iphone14ProMax: "430px",
};

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (min-width: ${BREAKPOINTS.iphone14ProMax}) {
    &::-webkit-scrollbar {
      width: 8px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ddd;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #ccc;
    }
  }

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const MainContent = styled.div`
  padding-top: 70px; /* Height of the header */
`;

interface SectionProps {
  id?: string;
}

const Section = styled.section<SectionProps>`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    min-height: calc(100vh - 70px);
    padding: 1rem;
    scroll-snap-align: start;
    scroll-snap-stop: ${(props) => (props.id === "home" ? "always" : "normal")};
  }
`;

const IntroSection = styled(Section).attrs({ id: "home" })`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 2rem;

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    padding: 1.5rem;
    gap: 3rem;
  }

  @media (max-width: ${BREAKPOINTS.galaxyS20Ultra}) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    gap: 2rem;
  }

  @media (max-width: ${BREAKPOINTS.iphone12Pro}) {
    padding: 1rem;
    gap: 1.5rem;
  }
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #ddd;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: ${BREAKPOINTS.galaxyS20Ultra}) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: ${BREAKPOINTS.iphone12Pro}) {
    width: 150px;
    height: 150px;
  }
`;

const IntroContent = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: ${BREAKPOINTS.galaxyS20Ultra}) {
    text-align: center;
    padding: 0 1rem;
  }

  @media (max-width: ${BREAKPOINTS.iphone12Pro}) {
    padding: 0 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    font-size: 2.2rem;
  }

  @media (max-width: ${BREAKPOINTS.galaxyS20Ultra}) {
    font-size: 2rem;
  }

  @media (max-width: ${BREAKPOINTS.iphone12Pro}) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${BREAKPOINTS.galaxyS20Ultra}) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${BREAKPOINTS.iphone12Pro}) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
    line-height: 1.5;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${BREAKPOINTS.galaxyS20Ultra}) {
    justify-content: center;
  }
`;

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #24292e;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a1e22;
  }

  @media (max-width: ${BREAKPOINTS.iphone14ProMax}) {
    padding: 0.7rem 1.4rem;
    font-size: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.iphone12Pro}) {
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
  }
`;

const Home = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setCurrentSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <Header />
      <HomeContainer>
        <MainContent>
          <IntroSection>
            <ProfileImage>
              <img src={profilePhoto} alt="Profile" />
            </ProfileImage>
            <IntroContent>
              <Title>Welcome to My Portfolio</Title>
              <Description>
                Hi, I'm a Full Stack Developer passionate about creating amazing
                web applications. I specialize in building responsive,
                user-friendly websites and applications using modern
                technologies.
              </Description>
              <SocialLinks>
                <GithubLink
                  href="https://github.com/minhvip1997"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  GitHub Profile
                </GithubLink>
              </SocialLinks>
            </IntroContent>
          </IntroSection>

          <Section id="about" data-section="about">
            <About />
          </Section>

          <Section id="experience" data-section="experience">
            <Experience />
          </Section>

          <Section id="projects" data-section="projects">
            <Projects />
          </Section>

          <Section id="contact" data-section="contact">
            <Contact />
          </Section>
        </MainContent>
      </HomeContainer>
    </>
  );
};

export default Home;
