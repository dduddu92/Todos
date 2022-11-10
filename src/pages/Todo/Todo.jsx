import React, { useEffect } from 'react';
import TodoCreate from '../../components/todo/TodoCreate';
import TodoHeader from '../../components/todo/TodoHeader';
import TodoList from '../../components/todo/TodoList';
import TodoTemplate from '../../components/todo/TodoTemplate';
import styled from 'styled-components';

function Todo() {
  //브라우저의 세션 기록 스택에 현재 위치를 등록 후 알람 출력.
  const preventGoBack = () => {
    window.history.pushState(null, '', window.location.href);
    alert('로그인 페이지로 돌아가시겠습니까? 먼저 로그아웃 해주세요.');
  };

  // 브라우저에 렌더링 시 한 번만 실행하는 코드
  useEffect(() => {
    (() => {
      window.history.pushState(null, '', window.location.href);
      window.addEventListener('popstate', preventGoBack);
    })();

    return () => {
      window.removeEventListener('popstate', preventGoBack);
    };
  }, []);
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
