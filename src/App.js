
import './App.css';
import Home from './Comp/Home';
import About from './Comp/About';
import{Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
