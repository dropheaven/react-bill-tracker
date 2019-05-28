import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';


const Header = () => (
  <div>
    <NavLink to="/" exact={true}>Home</NavLink>
    <br />
    <NavLink to="/help">Help</NavLink>
  </div>
);
  
const Home = () => <p>Home</p>;
const Help = () => <p>Help</p>;
const NotFound = () => <p>Page Not found</p>;

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
