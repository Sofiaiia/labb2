import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import './App.css';
import Game from './views/Game';
import Rules from './views/Rules';
import Toplist from './views/Toplist';
import Start from './views/Start';

function App() {

  //Sätta till en hide true/false så man kan dölja menyn i spelet tex??
  //Kanske hellre knappar och setView på nått sätt som byter vyer??

  return (
    <div className="App">
      <h1> QUIZ </h1>
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
    </div>
  );
}

export default App;
