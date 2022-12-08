import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'
import { Link } from 'react-router-dom'

export function Home() {

  return (
    <div className="App">
      <ul>
        <li><Link to="/ripple">波紋</Link></li>
      </ul>
    </div>
  )
}

