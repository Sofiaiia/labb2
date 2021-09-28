import './styling/App.css';
import Start from './views/Start';
import Login from './views/Login';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
