import React from "react";
import styled from "styled-components";

// Full-page container
const LoginFormStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;           /* full viewport height */
  width: 100vw;            /* full viewport width */
  background-color: #0d1b2a; /* dark blue background */
  font-family: Arial, sans-serif;
`;

// Centered form box
const FormBox = styled.div`
  background-color: #1b263b; /* slightly lighter blue */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  width: 350px;
  max-width: 90%; /* responsive for smaller screens */
`;

// Form title
const Title = styled.h2`
  color: #e0e1dd;
  text-align: center;
  margin-bottom: 20px;
`;

// Input fields
const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 16px;
`;

// Submit button
const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  background-color: #415a77;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #778da9;
  }
`;

const HelloWorldComponent = () => {
  return (
    <LoginFormStyle>
      <FormBox>
        <Title>Login</Title>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </form>
      </FormBox>
    </LoginFormStyle>
  );
};

export default HelloWorldComponent;