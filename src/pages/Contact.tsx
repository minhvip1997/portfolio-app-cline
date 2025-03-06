import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(5px);
  }

  a {
    color: #0066cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <p>Get in touch with me through:</p>
      <ContactList>
        <ContactItem>
          <a href="mailto:your.email@example.com">📧 your.email@example.com</a>
        </ContactItem>
        <ContactItem>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            👥 linkedin.com/in/yourprofile
          </a>
        </ContactItem>
        <ContactItem>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 github.com/yourusername
          </a>
        </ContactItem>
      </ContactList>
    </ContactContainer>
  );
};

export default Contact;
