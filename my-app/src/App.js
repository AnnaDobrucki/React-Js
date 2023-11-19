import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './Components/FunctionalGreeting';
import FunctionalGreetingWithProps from './Components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps />
    </div>
  );
}

export default App;
