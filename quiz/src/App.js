//import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import './styling/App.css';
//import Game from './views/Game';
//import Rules from './views/Rules';
//import Toplist from './views/Toplist';
import Start from './views/Start';

function App() {

  /* 
  <BrowserRouter>
        <div>
          <Link to="/"> Home</Link>
          <Link to="/game"> Play </Link>{' '}
          <Link to="/rules"> Rules </Link>{' '}
          <Link to="/toplist"> Toplist </Link>{' '}
          <Switch>
            <Route exact path="/" component={Start}/>
            <Route path="/game" component={Game} /> 
            <Route path="/rules" component={Rules} /> 
            <Route path="/toplist" component={Toplist} /> 
          </Switch>
        </div>
      </BrowserRouter>
  */ 
 
  return (
    <div className="App">
      <h1> QUIZ </h1>
      <Start></Start>
    </div>
  );
}

export default App;
