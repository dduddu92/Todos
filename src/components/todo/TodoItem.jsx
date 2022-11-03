import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseAuth';
import { collection, doc, getDocs } from 'firebase/firestore';

const TodoItem = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const querySnapshot = await getDocs(collection(db, 'todo'));
  };
  useEffect(() => {
    getTodos();
  }, []);
  return <div>{todos}</div>;
};

export default TodoItem;
