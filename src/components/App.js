import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from 'routers/Detail';
import Home from 'routers/Home';
import GlobalStyle from 'styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
