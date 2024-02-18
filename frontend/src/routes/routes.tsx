import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './private-routes';
import Login from '../pages/Login';
import Home from '../pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />} >
          <Route path='/home' element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
