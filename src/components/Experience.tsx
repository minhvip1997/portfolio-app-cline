import styled from "styled-components";

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const Experience = () => {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Software Engineer",
      company: "Tech Company",
      duration: "2022 - Present",
      description: [
        "Developed and maintained full-stack web applications using React and Node.js",
        "Implemented responsive designs and improved application performance",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
      ],
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      duration: "2020 - 2022",
      description: [
        "Built and optimized RESTful APIs using Express.js",
        "Created responsive user interfaces with React and TypeScript",
        "Participated in code reviews and agile development processes",
      ],
    },
  ];

  return (
    <ExperienceSection>
      <h2>Experience</h2>
      <ExperienceContainer>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index}>
            <ExperienceHeader>
              <Title>{exp.title}</Title>
              <Company>{exp.company}</Company>
              <Duration>{exp.duration}</Duration>
            </ExperienceHeader>
            <Description>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Description>
          </ExperienceItem>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceItem = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ExperienceHeader = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
`;

const Company = styled.h4`
  font-size: 1rem;
  color: #4a5568;
  margin: 0;
`;

const Duration = styled.p`
  font-size: 0.875rem;
  color: #718096;
  margin: 0.25rem 0 0 0;
`;

const Description = styled.div`
  ul {
    margin: 0;
    padding-left: 1.25rem;

    li {
      color: #4a5568;
      margin-bottom: 0.5rem;
      line-height: 1.5;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default Experience;
