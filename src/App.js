import logo from './logo.svg';
import './App.css';
import Child from './common/child';
import Parent from './common/parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='row'>

        
        <div className='col-6'>
          <Parent></Parent>
        </div>
        <div className='col-6'>
          <Child></Child>
        </div> 
      </div>
    </div>
  );
}

export default App;
