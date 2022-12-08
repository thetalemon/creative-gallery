import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import {Home} from './pages/Home'
import {RippleEffect} from './pages/RippleEffect'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ripple" element={<RippleEffect />} />
      </Routes>
    </BrowserRouter>
  )
}
