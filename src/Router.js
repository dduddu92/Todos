import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './pages/Login/Login';
import Todo from './pages/Todo/Todo';

const Router = () => {
  return (
    <>
      {/*로그인 화면에서는 navigation bar 보이지 않음*/}
      {useLocation().pathname !== '/' && <Navigation />}
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/" exact element={<Login />} />
      </Routes>
    </>
  );
};
export default Router;
