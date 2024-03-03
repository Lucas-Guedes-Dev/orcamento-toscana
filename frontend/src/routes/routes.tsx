import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PrivateRoute from './private-routes';
import Login from '../pages/Login';
import Orcamentos from '../pages/Orcamentos';
import TableEmploye from '../pages/Employe/TableEmploye';
import TableMenu from '../pages/Menu/TableMenu';
import TableEvents from '../pages/Events/TableEvents';
import TableDrinks from '../pages/Drinks/TableDrinks';
import Register from '../pages/Register';
import RegisterMenu from '../pages/Menu/RegisterMenu';

const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />} >
          <Route path='/orcamentos' element={<Orcamentos/>}/>
          
          {/* REGISTROS */}
          <Route path='/registers-employe' element={<TableEmploye/>}/>
          <Route path='/registers-menu' element={<TableMenu/>}/>
          <Route path='/registers-events' element={<TableEvents/>}/>
          <Route path='/registers-drinks' element={<TableDrinks/>}/>

          {/* REGISTRAR */}
          <Route path='/register-menu' element={<RegisterMenu/>}/>

          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
