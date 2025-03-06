import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to My Portfolio</Title>
      <Description>
        Hi, I'm a Full Stack Developer passionate about creating amazing web
        applications.
      </Description>
    </HomeContainer>
  );
};

export default Home;
