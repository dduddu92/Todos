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
    <TodoHeaderBlock>오늘 초록광인이 해야 할 일 1개 남았음</TodoHeaderBlock>
  );
};

const TodoHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  border-bottom: 1px solid #e9ecef;
`;
export default TodoHeader;
