
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';

import Main from './pages/Main';
import Register from './pages/Register';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/main' element={<Main/>}/>

      </Routes>
    </Router>
  )
}

export default App;
