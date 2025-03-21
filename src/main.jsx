import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Index.jsx'
import 'boxicons/css/boxicons.min.css';


createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<Index></Index>}></Route>
    </Routes>
  </Router>
)
