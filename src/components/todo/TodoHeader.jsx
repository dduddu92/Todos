import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { auth, db } from '../../firebaseAuth';

const TodoHeader = () => {
  const [todos, setTodos] = useState([]);
  const userUid = auth.currentUser.uid;
  const displayName = auth.currentUser.displayName;
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
  const undoneTask = todos.filter(todo => !todo.done);

  useEffect(() => {
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
    <TodoHeaderBlock>
      <TodayBlock>{dateString}</TodayBlock>
      <UndoneCountBlock>
        {todos.length === 0 ? (
          <Text>
            <span>{displayName}</span>님 업무를 등록해 주세요 😄
          </Text>
        ) : undoneTask.length !== todos.length && undoneTask.length === 0 ? (
          <Text>
            <span>{displayName}</span>님 할 일을 모두 마쳤어요! 🥳
          </Text>
        ) : (
          <Text>
            <span>{displayName}</span>님 앞으로 <span>{undoneTask.length}</span>
            개 남았어요! 🍀
          </Text>
        )}
      </UndoneCountBlock>
    </TodoHeaderBlock>
  );
};
const TodoHeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  border-bottom: 1px solid #e9ecef;
`;

const TodayBlock = styled.h1`
  margin-bottom: 20px;
  color: #343a40;
  font-size: 30px;
  font-family: 'yg-jalnan';
`;

const UndoneCountBlock = styled.div`
  color: #343a40;
  font-size: 20px;
`;

const Text = styled(UndoneCountBlock)`
  font-family: 'yg-jalnan';
  span {
    color: #0ca678;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export default TodoHeader;
