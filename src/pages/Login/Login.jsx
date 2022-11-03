import React from 'react';
import styled from 'styled-components';
import AuthForm from '../../components/login/AuthForm';
import AuthTemplate from '../../components/login/AuthTemplate';

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
  height: calc(100vh - 160px);
  display: flex;
  align-items: center;
`;

export default Login;
