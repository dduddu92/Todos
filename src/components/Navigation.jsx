import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, logOut } from '../firebaseAuth';
import styled from 'styled-components';

const Navigation = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    logOut(auth)
      .then(() => {
        alert('로그아웃 되었습니다. 로그인 화면으로 돌아갑니다.');
        navigate('/');
      })
      .catch(err => {
        alert(err.message);
      });
  };
  return (
    <NavigationWrapper>
      <Title>TODOLIST</Title>
      <Ul>
        <li>
          <LogoutButton onClick={onLogOutClick}>로그아웃</LogoutButton>
        </li>
      </Ul>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  background-color: #92e2c5;
`;

const Title = styled.h1`
  color: #087f5b;
  font-size: 36px;
  text-align: center;
  font-family: 'yg-jalnan';
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const LogoutButton = styled.button`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background-color: #087f5b;
  color: white;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background-color: #c92a2a;
  }
`;

export default Navigation;
