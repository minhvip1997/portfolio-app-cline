import React from "react";
import styled from "styled-components";
import About from "../pages/About";
import Experience from "./Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

interface MobileSectionProps {
  backgroundWhite?: boolean;
}

const MobileSection = styled.section<MobileSectionProps>`
  min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 1.5rem;
  background-color: ${(props) =>
    props.backgroundWhite ? "white" : "transparent"};
  scroll-snap-align: start;
  scroll-snap-stop: always;
  flex-shrink: 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

const MobileContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  background-color: white;
  z-index: 990;

  &::-webkit-scrollbar {
    display: none;
  }

  & > ${MobileSection} {
    height: 100%;
  }
`;

const MobileContent: React.FC = () => {
  return (
    <MobileContainer>
      <MobileSection backgroundWhite id="about">
        <ContentWrapper>
          <About />
        </ContentWrapper>
      </MobileSection>
      <MobileSection backgroundWhite id="experience">
        <ContentWrapper>
          <Experience />
        </ContentWrapper>
      </MobileSection>
      <MobileSection backgroundWhite id="projects">
        <ContentWrapper>
          <Projects />
        </ContentWrapper>
      </MobileSection>
      <MobileSection backgroundWhite id="contact">
        <ContentWrapper>
          <Contact />
        </ContentWrapper>
      </MobileSection>
    </MobileContainer>
  );
};

export default MobileContent;
