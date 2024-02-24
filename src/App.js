// import logo from './logo.svg';
import AnotherComponent from './AnotherComponent';
import AnotherComponent2 from './AnotherComponent2';
import './App.css';
import {Counter} from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<p>Redux Toolkit</p>
<Counter />
<AnotherComponent />
<AnotherComponent2 />
      </header>
    </div>
  );
}

export default App;
