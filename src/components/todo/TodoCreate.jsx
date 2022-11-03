import React, { useState } from 'react';
import { db } from '../../firebaseAuth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState('');
  const onToggle = () => setOpen(!open);
  const onChange = event => {
    const {
      target: { value },
    } = event;
    setTodo(value);
  };

  const onSubmit = async event => {
    event.preventDefault(); //새로 고침 방지
    try {
      if (todo === '') {
        alert('내용을 입력 해주세요.');
      } else {
        await addDoc(collection(db, 'todo'), {
          todo,
          createdAt: serverTimestamp(),
        });
        setTodo('');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {open && (
        <InsertFormPosition>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              value={todo}
              placeholder="할 일을 입력 후, Enter 를 눌러주세요."
              onChange={onChange}
            />
          </InsertForm>
        </InsertFormPosition>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

const CircleButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  color: white;
  background: #12b886;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #099268;
  }
  border-radius: 50%;
  border: none;
  font-size: 60px;
  z-index: 5;
  cursor: pointer;
  transform: translate(-50%, 50%);
  outline: none;
  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #fa5252;
      &:hover {
        background: #ffa8a8;
      }
      &:active {
        background: #e03131;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPosition = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export default React.memo(TodoCreate);
