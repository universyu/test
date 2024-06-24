import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <h1>Hello</h1>
    <BrowserRouter basename="/test/">
      <Routes>
        <Route path="/image" element={<img src="/1.jpg" alt="myImg" />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App