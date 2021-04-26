import Menu from './components/menu/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import TradeScreen from './screens/TradeScreen';
import ContactScreen from './screens/ContactScreen';


function App() {
  return (
    <div className="App">
      <Router>
      <Menu />
      <div>
      <Switch>
        <Route exact path="/about" component={ AboutScreen } />
        <Route exact path="/trades"  component={ TradeScreen }/>
        <Route exact path="/contact"  component={ ContactScreen }/>
        <Route exact path="/"  component={ HomeScreen }/>

        {/* <Redirect to='/' /> */}
              </Switch>
              </div>
              </Router>
    </div>
  );
}

export default App;
