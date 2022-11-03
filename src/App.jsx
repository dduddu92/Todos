import { useEffect, useState } from 'react';
import { auth } from './firebaseAuth';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [initialized, setInitialized] = useState(false);
  //로그인 여부에 따라 보이는 화면의 상태가 달라지게 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUserObj, setLoggedUserObj] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        setLoggedUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInitialized(true);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      {initialized ? (
        <Router isLoggedIn={isLoggedIn} loggedUserObj={loggedUserObj} />
      ) : (
        '잠시만 기다려 주세요.'
      )}
    </>
  );
}

export default App;
