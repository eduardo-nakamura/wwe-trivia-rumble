import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import TriviaList from './triviaList'
import TriviaNew from './triviaNew'

function App() {
  
  return (
    <div>
      {/* <TriviaNew /> */}
      <TriviaList />
    </div>
  );
}

export default App;
