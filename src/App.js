import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App p-8 bg-lime-300 h-screen">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
