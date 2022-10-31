import React from 'react';
import styled from 'styled-components';
import AuthForm from '../../components/AuthForm';
import AuthTemplate from '../../components/AuthTemplate';

function Login() {
  return (
    <LoginBlock>
      <AuthTemplate>
        <AuthForm />
      </AuthTemplate>
    </LoginBlock>
  );
}

const LoginBlock = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export default Login;
