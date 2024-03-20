import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './component/Nav'
import Home from './component/Home'
import Footer from './component/Footer'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/>
      <br />
      <br />
      <Footer/>
    </div>
  )
}

export default App
