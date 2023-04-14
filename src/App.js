import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="App p-8 bg-lime-300">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
