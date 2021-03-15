//React imports
import './styles/App.css';
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './components/Home';
import ObjectId from './components/ObjectId';
import Facts from './components/Facts';

function App() {
  return (
    <div>
      
      {/* Page Navigation */}
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/facts"} component={Facts}/>
        <Route path={"/facts/:objectId"} component={ObjectId}/>
      </Switch>
    </div>
  );
}

export default App;
