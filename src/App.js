import './App.css';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Login from './components/Login/Login';
import AdminParent from './components/AdminParent/AdminParent'


function App() {
  const [admin, changeAdmin] = useState(false)
  
  console.log(process.env.REACT_APP_FETCH_LINK);

  return (
    <div className="App">
      <Switch>
      <Route path='/' exact>
        <Redirect to='/login'></Redirect>
      </Route>
      <Route path='/login' exact>
        <Login admin={admin} changeAdmin={changeAdmin}></Login>
      </Route>
      <Route path='/admin' exact>
        <AdminParent admin={admin} changeAdmin={changeAdmin} ></AdminParent>        
      </Route>
      
      </Switch>
    </div>
  );
}

export default App;
