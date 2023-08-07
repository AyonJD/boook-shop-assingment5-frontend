import { useEffect } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar'
import Hero from './components/ui/Hero'
import HeroCard from './components/ui/HeroCard'
// import ScrollingImage from './components/ui/ScrollingImage'
import { COLORS } from './constant/colors'
import { gsap } from 'gsap'
import { Box } from '@mui/material'
import Books from './pages/Books'

function App() {
  useEffect(() => {
    const navbar = document.querySelector('#navbar')
    const timeline = gsap.timeline({ paused: true })

    timeline.to(navbar, { backgroundColor: COLORS.SECONDARY })

    const scrollListener = () => {
      if (window.scrollY === 0) {
        timeline.reverse()
      } else {
        timeline.play()
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      <Box className="hero_section">
        <Navbar />
        <Hero />
      </Box>
      <HeroCard />
      <Books />
      {/* <ScrollingImage /> */}
    </>
  )
}

export default App
