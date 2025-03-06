import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

const SkillsSection = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SkillsTitle = styled.h3`
  color: #333;
  margin-bottom: 1rem;
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  background-color: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Description>
        I'm a software developer with expertise in React, TypeScript, Node.js,
        and more.
      </Description>
      <SkillsSection>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsList>
          <SkillItem>React & TypeScript</SkillItem>
          <SkillItem>Node.js & Express</SkillItem>
          <SkillItem>HTML5 & CSS3</SkillItem>
          <SkillItem>JavaScript (ES6+)</SkillItem>
          <SkillItem>MongoDB & SQL</SkillItem>
        </SkillsList>
      </SkillsSection>
    </AboutContainer>
  );
};

export default About;
