import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Hero from './Components/Hero/hero';
import PrivateRoute from './Routes/PrivateRoute';
import PublicOnlyRoute from './Routes/PublicOnlyRoute';
import RegistrationPage from './Routes/RegistrationRoute';
import LoginPage from './Routes/LoginRoute';
import './App.css';
// import AddLogForm from './Components/AddLog/addLog';
// import EditLogForm from './Components/EditLog/editLog';
import Dashboard from './Components/Dashboard/dashboard';

// burnt sienna: peru
// dark blue: #0B1C48
// orange: E66912
// teal: #016367
// yellow: 
// gray: 

/* 

            <Route
            path='/addlog'
            component={AddLogForm}
          />
            <Route
            path='/editlog'
            component={EditLogForm}
          />
*/

class App extends Component {
  state = { hasError: false }
  
  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
  return (
    <div className='App'>
         <header className='App__header'>
          <Hero />
        </header>

      <main className='App__main'>
      {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
        <Switch>
          <Route 
              exact 
              path={'/'}
              component={Hero}
            />
          <PublicOnlyRoute
              path='/register'
              component={RegistrationPage}
            />
          <PublicOnlyRoute
            path='/login'
            component={LoginPage}
          />
           <PrivateRoute
            path='/dashboard'
            component={Dashboard}
          />
        </Switch>
         
      </main>
      </div>
  )
  }
  }


export default App;