import React from 'react'
import './Layout.css'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <a href="/">manasas creative-coding gallery</a>
      </header>
      <div id="mainContent">
        {children}
      </div>
      <footer>
        <a href="https://manasas.dev" target="_blank">© 2022 Manami SASAKI</a>
      </footer>
    </>
  )
}
