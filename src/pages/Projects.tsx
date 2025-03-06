import React from "react";
import styled from "styled-components";

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-top: 0;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.5;
  }
`;

const Projects: React.FC = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <ProjectGrid>
        <ProjectCard>
          <h3>Project 1</h3>
          <p>A React-based web application...</p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project 2</h3>
          <p>A full-stack Node.js application...</p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project 3</h3>
          <p>A TypeScript library...</p>
        </ProjectCard>
      </ProjectGrid>
    </div>
  );
};

export default Projects;
