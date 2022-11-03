import React from 'react';
import styled from 'styled-components';
import TodoItem from '../../components/todo/\bTodoItem';
import TodoCreate from '../../components/todo/TodoCreate';
import TodoHeader from '../../components/todo/TodoHeader';
import TodoTemplate from '../../components/todo/TodoTemplate';

function Todo() {
  return (
    <TodoBlock>
      <TodoTemplate>
        <TodoHeader />
        <TodoItem />
        <TodoCreate />
      </TodoTemplate>
    </TodoBlock>
  );
}

const TodoBlock = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Todo;
