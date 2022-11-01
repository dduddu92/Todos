import React, { useEffect, useState } from 'react';
import { register, login, db, updateUser } from '../firebaseAuth';
import { setDoc, doc } from 'firebase/firestore';
import styled from 'styled-components';

function AuthForm() {
  //input에 입력하는 값을 한번에 관리하기 위해 작성
  const [userForm, setUserForm] = useState({
    userName: '',
    email: '',
    password: '',
  });

  //구조분해 할당
  const { userName, email, password } = userForm;

  const [newAccount, setNewAccount] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    setUserForm({ ...userForm, [name]: value });
  };

  useEffect(() => {
    if (!userName && !email && !password) {
      setErrorMessage('정보를 입력해주세요.');
    }
  }, []);
  const onSubmit = async event => {
    event.preventDefault();
    if (newAccount) {
      //회원가입을 진행
      await register(email, password)
        .then(result => {
          const userInfo = {
            userName,
            email,
          };
          // 문서의 id를 유저의 uid로 설정
          setDoc(doc(db, 'users', result.user.uid), userInfo);
          updateUser(userInfo.userName);
          alert('회원가입을 축하드립니다!');
          setUserForm({
            userName: '',
            email: '',
            password: '',
          });
          setNewAccount(false);
        })
        .catch(err => {
          switch (err.code) {
            case 'auth/email-already-in-use':
              return alert('이미 사용중인 이메일입니다.');
            default:
              return alert('회원가입에 실패했습니다.');
          }
        });
    } else {
      //로그인을 진행
      login(email, password).then(result => {
        console.log(result.user);
      });
    }
  };

  return (
    <AuthFormWrapper>
      <AuthTitle>Todo List</AuthTitle>
      <AuthFormBox onSubmit={onSubmit}>
        {newAccount === true && (
          <AuthNameInput
            type="text"
            name="userName"
            placeholder="UserName"
            value={userName}
            onChange={onChange}
          />
        )}
        <AuthEmailInput
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          required
          autoFocus
          onChange={onChange}
        />
        <AuthPasswordInput
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          required
          onChange={onChange}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        {newAccount === false ? (
          <AuthSubmitButton type="submit">로그인</AuthSubmitButton>
        ) : (
          <AuthSubmitButton type="submit">회원가입</AuthSubmitButton>
        )}
      </AuthFormBox>
      <AuthTypeChangeButton
        onClick={() => {
          setNewAccount(!newAccount);
        }}
      >
        {newAccount ? '로그인' : '회원가입'}
      </AuthTypeChangeButton>
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

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 10px;
`;

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
