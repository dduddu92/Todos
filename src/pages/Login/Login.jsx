import React, { useEffect } from 'react';
import AuthTemplate from '../../components/login/AuthTemplate';
import AuthForm from '../../components/login/AuthForm';
import styled from 'styled-components';

function Login() {
  //브라우저의 세션 기록 스택에 현재 위치를 등록 후 알람 출력.
  const preventGoBack = () => {
    window.history.pushState(null, '', window.location.href);
    alert('유효하지 않은 접근입니다.');
  };

  // 브라우저에 렌더링 시 한 번만 실행하는 코드
  useEffect(() => {
    (() => {
      window.history.pushState(null, '', window.location.href);
      window.addEventListener('popstate', preventGoBack);
    })();

    return () => {
      window.removeEventListener('popstate', preventGoBack);
    };
  }, []);

  return (
    <LoginBlock>
      <AuthTemplate>
        <AuthForm />
      </AuthTemplate>
    </LoginBlock>
  );
}

const LoginBlock = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export default Login;
