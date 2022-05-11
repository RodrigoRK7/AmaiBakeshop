//import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*
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
        */}
        {/*<Login />*/}
        {/*<Signup />*/}
        <Profile />
      </header>
    </div>
  );
}

export default App;
