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

const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />} >
          <Route path='/orcamentos' element={<Orcamentos/>}/>
          <Route path='/register-employe' element={<TableEmploye/>}/>
          <Route path='/register-menu' element={<TableMenu/>}/>
          <Route path='/register-events' element={<TableEvents/>}/>
          <Route path='/register-drinks' element={<TableDrinks/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
