import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import Brand from '../components/home/Brand'
import HeroLeft from '../components/home/HeroLeft'
import Popular from '../components/home/Popular'
import Shop from '../components/home/Shop'
import Heroleft_2 from '../components/home/Heroleft_2'
import Oliver from '../components/home/Oliver'
import Divide from '../components/home/Divide'
import Choice from '../components/home/Choice'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='Hero'>
        <HeroLeft />
      </section>

      <section className='brands'>
        <Brand />
      </section>
      <section>
        <Popular />
      </section>
      <section>
        <Shop />
      </section>
      <section>
        <Heroleft_2 />
      </section>
      <section>
        <Oliver />
      </section>
      <section>
        <Divide/>
      </section>
      <section className=''>
        <Choice />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home