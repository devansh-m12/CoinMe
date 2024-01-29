import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import {Home, Show }from './pages/index.js'
import {Footer} from './components/index.js'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:id"  element ={<Show/>}   />
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App