import './styling/App.css';
import Start from './views/Start';
import Login from './views/Login';
import Register from './views/Register';
import Game from './views/Game';
import Rules from './views/Rules';
import Toplist from './views/Toplist';
import quizLogo from './pictures/quizLogo.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <img src={quizLogo} alt="logo" height="200"/>
      <Router> 
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact  path="/start" component={Start}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/game" component={Game}/>
            <Route exact path="/rules" component={Rules}/>
            <Route exact path="/toplist" component={Toplist}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
