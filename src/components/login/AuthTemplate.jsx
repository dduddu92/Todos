import React from 'react';
import styled from 'styled-components';

function AuthTemplate({ children }) {
  return <AuthTemplateWrapper>{children}</AuthTemplateWrapper>;
}

const AuthTemplateWrapper = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  padding: 40px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;
export default AuthTemplate;
