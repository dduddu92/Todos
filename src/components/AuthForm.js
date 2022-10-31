import React, { useState } from 'react';
import styled from 'styled-components';

function AuthForm() {
  const [changeAuthButton, setChangeAuthButton] = useState('true');
  return (
    <AuthFormWrapper>
      <AuthTitle>Todo List</AuthTitle>
      <AuthFormBox>
        <AuthNameInput
          type="text"
          name="userName"
          placeholder="성함을 입력해주세요."
        />
        <AuthEmailInput
          type="email"
          name="email"
          placeholder="이메일을 입력하세요."
          autoFocus
        />
        <AuthPasswordInput
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요."
        />

        <AuthSubmitButton>누르는 버튼</AuthSubmitButton>
      </AuthFormBox>
      <AuthTypeChangeButton>누르면 버튼이 바뀜</AuthTypeChangeButton>
    </AuthFormWrapper>
  );
}

const AuthFormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthTitle = styled.h1`
  width: 100%;
  margin: 0 0 40px;
  color: #087f5b;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const AuthFormBox = styled.form`
  display: flex;
  width: 100%;
  padding: 0px 20px 20px;
  flex-direction: column;
`;

const AuthEmailInput = styled.input`
  height: 40px;
  margin-bottom: 30px;
  font-size: 16px;
  border: 0;
  padding: 0 10px;
  border-bottom: 1.5px solid rgba(9, 146, 104, 0.5);
  outline: 0;
  &:focus {
    background-color: rgba(150, 242, 215, 0.2);
  }
`;

const AuthPasswordInput = styled(AuthEmailInput)``;

const AuthNameInput = styled(AuthEmailInput)``;

const AuthSubmitButton = styled.button`
  height: 50px;
  background-color: rgba(9, 146, 104, 0.85);
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: 0;
  border-radius: 8px;
  outline: 0;
  cursor: pointer;
  &:hover {
    background-color: rgba(9, 146, 104, 1);
  }
`;

const AuthTypeChangeButton = styled.button`
  padding: 0 0 1px;
  background-color: transparent;
  color: rgba(9, 146, 104, 1);
  font-size: 14px;
  border: 0;
  border-bottom: 1px solid rgba(9, 146, 104, 1);
  outline: 0;
  cursor: pointer;
`;

export default AuthForm;
