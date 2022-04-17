import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Public from './Public';
import Profile from './Profile';
import Protected from './Protected';
import MorePublic from './MorePublic'

const Router = () => {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route exact path="/"element={<Public />} />
        <Route exact path="/protected" element={<Protected />} />
        <Route exact path="/profile" element={<Profile />}/>
        <Route exact path="/morepublic" element={<MorePublic />}/>
        <Route element={<Public />}/>
      </Routes>
    </HashRouter>
  );
};

export default Router;
