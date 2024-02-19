import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './private-routes';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Orcamentos from '../pages/Orcamentos';
import RegisterEmploye from '../pages/RegisterEmploye';
import RegisterMenu from '../pages/RegisterMenu';
import RegisterEvents from '../pages/RegisterEvents';
import RegisterDrinks from '../pages/RegisterDrinks';
import Register from '../pages/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />} >
          <Route path='/home' element={<Home/>}/>
          <Route path='/orcamentos' element={<Orcamentos/>}/>
          <Route path='/register-employe' element={<RegisterEmploye/>}/>
          <Route path='/register-menu' element={<RegisterMenu/>}/>
          <Route path='/register-events' element={<RegisterEvents/>}/>
          <Route path='/register-drinks' element={<RegisterDrinks/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
