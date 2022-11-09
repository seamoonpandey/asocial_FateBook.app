import './App.css';
import Body from './Body';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route path='/' component={Body} exact />
          <Route path='/dashboard' component={Dashboard} exact />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
