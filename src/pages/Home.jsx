import React from 'react'
import NavBar from '../components/navbar/NavBar'
import HomeSection from '../components/Home/HomeSection'
import AboutSection from '../components/About/AboutSection'
import PortfolioSection from '../components/Portfolio/PortfolioSection'
import ServicesSection from '../components/Services/ServicesSection'
import ContactSection from '../components/Contact/ContactSection'
import TechCarousel from '../components/TechStack/TechCarousel'

function Home() {
  return (
    <div className="relative">
      <NavBar />
      <main className="pt-20">
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <TechCarousel />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default Home