import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth, logOut } from '../firebaseAuth';

const Navigation = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
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
      <Ul>
        <li>
          <UserName>{user.displayName}</UserName>
        </li>
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
  background-color: #92e2c5;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0 20px;
`;

const UserName = styled.span`
  margin-right: 20px;
  font-size: 16px;
  letter-spacing: 1px;
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
