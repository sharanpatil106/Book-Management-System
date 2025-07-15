import './App.css'
import Home from './pages/Home';
import Seed from './seed';

import { Route, Routes } from 'react-router-dom';
import AboutPage from '../src/pages/AboutPage';

function App() {
  return (
    <>
    <Seed />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about/:bookid' element={<AboutPage/>}/>
      </Routes>
    </>
  )
}
export default App