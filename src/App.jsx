import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Topbar from './components/topbar'
import BackgroundEffect from './components/BackgroundEffect'
import sections from './util/sections'

function App() {
  const [open, setOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('')

  useEffect(
    () => {
      console.log(currentSection)
    },
    [currentSection]
  )

  const toggleNavbar = () => {
    setOpen(prev => !prev)
  }

  return (
    <div>
      
      <BackgroundEffect/>
      <Topbar toggleNavbar={toggleNavbar} open={open} currentSection={currentSection} setCurrentSection={setCurrentSection}/>
      <About/>
      <Experience/>

    </div>
  )
}

export default App
