import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/home.css'
import Subscribe from '../components/Subscribe'
import Leftsection from '../components/Leftsection'

const Home = () => {
  return (
    <main>
      <Navbar/>

      <section className='container'>
        <div className="bg"></div>

        <div className="left-section">
          <Leftsection/>
        </div>
        <div className="right-section">
          <Subscribe/>
        </div>
      </section>
    </main>
  )
}

export default Home
