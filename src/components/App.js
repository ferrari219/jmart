import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from 'routers/Detail';
import Home from 'routers/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
