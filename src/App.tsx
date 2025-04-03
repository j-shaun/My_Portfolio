import './App.css'
import ExploreMore from './explore.tsx'
import Footer from './Footer.tsx'
import Hero from './Hero.tsx'
import Portfolio from './portfolio.tsx'
import Header from './Header.tsx'
import SunMoon from './Sunmoon.tsx'


function App() {
  return (
   <main>
    <SunMoon/>
    <Header/>
    <Hero/>
    <Portfolio/>
    <ExploreMore/>
    <Footer/>
   </main>
  )
}

export default App
