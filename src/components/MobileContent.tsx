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
  margin-top: 70px;
  overflow-y: auto;
  background-color: ${(props) =>
    props.backgroundWhite ? "white" : "transparent"};
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

const MobileContent: React.FC<{ section: string }> = ({ section }) => {
  switch (section) {
    case "about":
      return (
        <MobileSection backgroundWhite>
          <ContentWrapper>
            <About />
          </ContentWrapper>
        </MobileSection>
      );
    case "experience":
      return (
        <MobileSection backgroundWhite>
          <ContentWrapper>
            <Experience />
          </ContentWrapper>
        </MobileSection>
      );
    case "projects":
      return (
        <MobileSection backgroundWhite>
          <ContentWrapper>
            <Projects />
          </ContentWrapper>
        </MobileSection>
      );
    case "contact":
      return (
        <MobileSection backgroundWhite>
          <ContentWrapper>
            <Contact />
          </ContentWrapper>
        </MobileSection>
      );
    default:
      return null;
  }
};

export default MobileContent;
