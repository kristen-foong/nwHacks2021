import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React!
        </a>
      </header> */}
      
      <div class="main">
        <div class="head">
          <div class="side">
            <div class="side-in">
              A simple React app that takes public Covid data and displays it per user request. 
              Created for nwHacks 2021 by our awesome team.
            </div>
          </div>
          <div class="title">
            COVID TRACKER
          </div>
          <div class="links">
            <a href="link">Link</a>
          </div>
        </div>
        <div class="about">
          
        </div>
      </div>
    </div>
  );
}

export default App;
