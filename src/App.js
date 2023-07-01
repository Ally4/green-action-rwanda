// import logo from './logo.svg';
import Home from './components/Home.jsx';
import Blog from './components/Blog.jsx';
import Shop from './components/Shop.jsx';
import Contact from './components/About.jsx';
import About from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
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
          Learn React
        </a>
      </header> */}
      <Navbar />
      <Home />
      <Blog />
      <Contact />
      <Shop />
      <About />
    </div>
  );
}

export default App;
