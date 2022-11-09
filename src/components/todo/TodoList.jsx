import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseAuth';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const userUid = auth.currentUser.uid;

  useEffect(() => {
    // todos 컬렉션에서 현재 로그인한 유저가 작성한 투두만 가져오기
    const q = query(
      collection(db, 'todos'),
      where('creatorId', '==', `${userUid}`),
      orderBy('createdAt', 'asc')
    );
    onSnapshot(q, querySnapshot => {
      const data = [];
      querySnapshot.forEach(document => {
        data.push({ id: document.id, ...document.data() });
      });
      setTodos(data);
    });
  }, [userUid]);

  return (
    <TodoListWrapper>
      {todos.map(({ id, text, done }) => (
        <TodoItem key={id} id={id} text={text} done={done} />
      ))}
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.div`
  flex: 1;
  padding: 20px 20px 48px 20px;
  max-height: 500px;
  overflow-y: scroll;
`;

export default TodoList;
