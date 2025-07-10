import { useState } from 'react'
import './App.css'
import Home from './page/home'
import Header2 from './page/Header2'
import Header3 from './page/Header3'
import Header4 from './page/Header4'
import { Routes, Route } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header2" element={<Header2 />} />
      <Route path="/header3" element={<Header3 />} />
      <Route path="/header4" element={<Header4 />} />
    </Routes>
  )
}

export default App
