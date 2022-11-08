import React from 'react';
import TodoCreate from '../../components/todo/TodoCreate';
import TodoHeader from '../../components/todo/TodoHeader';
import TodoList from '../../components/todo/TodoList';
import TodoTemplate from '../../components/todo/TodoTemplate';
import styled from 'styled-components';

function Todo() {
  return (
    <TodoBlock>
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoBlock>
  );
}

const TodoBlock = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

export default Todo;
