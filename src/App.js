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
          <div class="heading">
            ABOUT <b>COVID-19</b>:
          </div>
          <div class="about-desc">
          Coronavirus disease 2019 (COVID-19) is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first case was identified in Wuhan, China, in December 2019. It has since spread worldwide, leading to an ongoing pandemic.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
