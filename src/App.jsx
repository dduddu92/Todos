import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { auth } from './firebaseAuth';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
      setInitialized(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      {initialized ? <Router /> : '잠시만 기다려 주세요.'}
    </BrowserRouter>
  );
}

export default App;
