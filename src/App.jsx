import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <h1>Hello</h1>
    <HashRouter >
      <Routes>
        <Route path="/image" element={<img src="/1.jpg" alt="myImg" />} />
      </Routes>
    </HashRouter>
    </>
    
  )
}

export default App