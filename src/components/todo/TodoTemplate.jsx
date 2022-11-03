import React from 'react';
import styled from 'styled-components';

function TodoTemplate({ children }) {
  return <TodoTemplateWrapper>{children}</TodoTemplateWrapper>;
}

const TodoTemplateWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 600px;
  margin: 0 auto;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

export default TodoTemplate;
