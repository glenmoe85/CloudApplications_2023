import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './components/read';
import Update from './components/update';
import Create from './components/create';
import View from './components/view';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <div class='margin-top'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />} />
        </Routes>
        <Routes>
          <Route path="/update" element={<Update />} />
        </Routes>
        <Routes>
          <Route path="/create" element={<Create />} />
        </Routes>
        <Routes>
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>    
  );
}

export default App;
