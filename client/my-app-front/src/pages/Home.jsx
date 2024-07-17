import React from 'react'
import NavBar from '../layouts/NavBar.jsx'
import Hero from '../components/Hero/Hero.jsx'
import About from '../components/About/About.jsx'
import Service1 from '../components/Services/Service1.jsx'
import Service2 from '../components/Services/Service2.jsx'
import Comments from '../components/Comments/Comments.jsx'
import Message from '../components/Message/Message.jsx'
import Footer from '../components/Footer/Footer.jsx'


export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Service1/>
      <Service2/>
      <Comments/>
      <Message/>
      <Footer/>
    </div>
  )
}
