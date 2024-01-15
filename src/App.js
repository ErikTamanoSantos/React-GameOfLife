import logo from './logo.svg';
import './App.css';

var curPage = "startPage"

function App() {
  return (
    <div className="App">
      <header></header>
      {
        {
          startPage: <StartPage/>
        }[curPage]
      }
    </div>
  );
}

export default App;
