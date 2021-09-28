import './styling/App.css';
import Start from './views/Start';
import quizLogo from './pictures/quizLogo.png';

function App() {
 
  //om man inte e inloggad ska man skickas till login 
  return (
    <div className="App">
      <img src={quizLogo} alt="logo" height="200"/>
      <Start></Start>
    </div>
  );
}

export default App;
