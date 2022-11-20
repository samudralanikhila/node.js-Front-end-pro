import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Hollywood from './Routes/Hollywood';
import Fitness from './Routes/Fitness';
import Food from './Routes/Food';
import Bollywood from './Routes/Bollywood';
import Technology from './Routes/Technology';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Bollywood' element={<Bollywood/>}></Route>
      <Route path='/Technology' element={<Technology/>}></Route>
      <Route path='/Hollywood' element={<Hollywood/>}></Route>
      <Route path='/Fitness' element={<Fitness/>}></Route>
      <Route path='/Food' element={<Food/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
