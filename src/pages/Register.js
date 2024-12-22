import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #008ac5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0078ad;
  }
`;

const Register = () => {
  return (
    <Container>
      <Title>Register for CouponnGPT</Title>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Register</Button>
    </Container>
  );
};

export default Register; 