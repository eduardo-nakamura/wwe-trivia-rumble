import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import TriviaList from './triviaList'

function App() {
  const sayHello = () => {
    console.log('Gello')
  }
  return (
    <div>
      <TriviaList />
    </div>
  );
}

export default App;
