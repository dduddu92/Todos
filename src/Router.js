import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

const Router = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />;
        <Route path="/" element={<Login />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
