import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import { ApiProvider } from './context/Context';
import SingleItem from './pages/singleItem/SingleItem';
import Hero from './components/Hero/Hero';


function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Hero/>}/>
        <Route  path='single' element={<SingleItem/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
