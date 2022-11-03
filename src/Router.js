import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './pages/Login/Login';
import Todo from './pages/Todo/Todo';

const Router = ({ isLoggedIn, loggedUserObj }) => {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation loggedUserObj={loggedUserObj} />}
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Todo />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
