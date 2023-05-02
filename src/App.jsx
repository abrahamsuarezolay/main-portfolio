import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Work from "./components/Work"
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className='app'>
      <Sidenav />
      <Main />
      <About />
      <Projects />
      <Work />
      <Contact />
    </div>
  )
}

export default App
