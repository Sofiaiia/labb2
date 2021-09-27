import './styling/App.css';
import Start from './views/Start';
import quizLogo from './pictures/quizLogo.png';

function App() {
 
  return (
    <div className="App">
      <img src={quizLogo} alt="logo" height="200"/>
      <Start></Start>
    </div>
  );
}

export default App;
