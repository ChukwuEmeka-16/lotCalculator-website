import Forex from './components/Forex';
import './App.css';
import ForexJpy from './components/ForexJpy';
import Indices from './components/Indices';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link , Route, Routes } from 'react-router-dom'

function App() {
  const styles ={
      textDecoration : 'none',
      color : "black",
      

  }
   
  return (
   

    <>
    <nav className='navbar bg-light'>
      <ul > 
        <li > <Link to="/" style={styles}> Forex </Link> </li>
        <li> <Link to="/forexjpy" style={styles}> Forex (Jpy) </Link> </li>
        <li> <Link to="/indices" style={styles}> indices  </Link>  </li>
      </ul>
      
    </nav>


   <Routes>
    <Route path='/'  element={ <Forex/> } />
    <Route path='/forexjpy'  element={ <ForexJpy/> } />
    <Route path='/indices'  element={ <Indices/> } />
   </Routes>
   </>
  );
}

export default App;
