import React, { useState } from 'react';
import { db } from '../../firebaseAuth';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';
import { HiCheck, HiOutlineX } from 'react-icons/hi';

const TodoItem = ({ id, text, done }) => {
  const [editTodo, setEditTodo] = useState(false);
  const [newTodo, setNewTodo] = useState(text);

  //투두 완료 표시로 전환
  const onToggleClick = async () => {
    const postDone = doc(db, 'todos', `${id}`);
    await updateDoc(postDone, { done: !done });
  };

  //투두 수정하기
  const onSubmit = async event => {
    event.preventDefault();
    if (text !== newTodo) {
      const postUpdate = doc(db, 'todos', `${id}`);
      await updateDoc(postUpdate, { text: newTodo });
    }
    setEditTodo(false);
  };

  const onChange = event => {
    const {
      target: { value },
    } = event;
    setNewTodo(value);
  };

  const onEditClick = () => {
    setEditTodo(prev => !prev);
  };

  //투두 삭제하기
  const onDeleteClick = async () => {
    const confirmToUser = window.confirm('정말 삭제하시겠습니까?');
    const postDelete = doc(db, 'todos', `${id}`);
    if (confirmToUser) {
      await deleteDoc(postDelete);
    }
  };
  return (
    <TodoItemWrapper onSubmit={onSubmit}>
      <CheckCircle done={done} onClick={onToggleClick}>
        {done && <MdDone />}
      </CheckCircle>
      {editTodo ? (
        <>
          <TextInput
            type="text"
            value={newTodo}
            autoFocus
            onChange={onChange}
            required
          />
          <ModifyButton>
            <HiCheck />
          </ModifyButton>
          <CancelButton>
            <HiOutlineX />
          </CancelButton>
        </>
      ) : (
        <>
          <Text done={done}>{text}</Text>
          <EditButton>
            <MdEdit onClick={onEditClick} />
          </EditButton>
          <Remove>
            <MdDelete onClick={onDeleteClick} />
          </Remove>
        </>
      )}
    </TodoItemWrapper>
  );
};

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  opacity: 0;
`;

const EditButton = styled(Remove)`
  margin: 0 12px;
  &:hover {
    color: #20c997;
  }
`;

const TodoItemWrapper = styled.form`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

const CheckCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 12px;
  border: 1px solid #ced4da;
  border-radius: 16px;
  font-size: 24px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #20c997;
      color: #20c997;
    `}
`;

const Text = styled.div`
  flex: 1;
  padding: 8px 0 8px 5px;
  color: #495057;
  font-size: 21px;
  line-height: normal;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const TextInput = styled.input`
  flex: 1;
  padding: 8px 0 8px 5px;
  color: #495057;
  border: 0;
  font-size: 21px;
  outline: none;
  &:focus {
    background-color: #e6fcf5;
  }
`;

const ModifyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-left: 12px;
  padding: 0;
  color: #20c997;
  background-color: white;
  border: 1px solid #20c997;
  border-radius: 8px;
  font-size: 16px;
  letter-spacing: 0.5px;
  cursor: pointer;
  &:hover {
    background-color: #20c997;
    color: white;
  }
`;

const CancelButton = styled(ModifyButton)`
  color: #ff6b6b;
  border: 1px solid #ff6b6b;
  &:hover {
    color: white;
    background-color: #ff6b6b;
  }
`;

export default TodoItem;
