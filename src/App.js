import './App.css';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/cart' element={<Checkout />}/>
      </Routes>
    </div>
  );
}

export default App;
