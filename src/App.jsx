import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <h1>Hello</h1>
    <Router>
      <Routes>
        <Route path="/image" element={<img src="/1.jpg" alt="myImg" />} />
      </Routes>
    </Router>
    </>
    
  )
}

export default App