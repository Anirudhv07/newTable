import { useState } from 'react'
import { Button, ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <ThemeProvider>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>

     </ThemeProvider>
     </BrowserRouter>
    </>
  )
}

export default App
