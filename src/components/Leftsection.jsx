import React from 'react'
import '../styles/leftsection.css'
import { Book, Time, Tv, School } from 'react-ionicons'
import lock from '../assets/lock.png'


const Leftsection = () => {
  return (
    <div className='left-section'>
      <h1 className='heading-1'>
      <span>Access curated courses worth </span>
      <span className='red-span'>₹ 18,500 <div className='red-line'/></span> <span>at just </span>
      <span className='blue-text'>₹ 99 </span>
      <span>per year!</span>
      </h1>

      <div className='points'>

        <Book
        className='icon'
        color={'white'} 
        title={'courses'}
        height="40px"
        width="40px"
        />
        <p><span className='blue-text bolder'>100+</span> Job relevant courses</p>
      </div>

      <div className='points'>

        <Time
        className='icon'
        color={'#ffffff'} 
        title={'courses'}
        height="40px"
        width="40px"
        />
        <p><span className='blue-text bolder'>20,000+</span> Hours of content</p>
      </div>

      <div className='points'>

        <Tv
        className='icon'
        color={'#ffffff'} 
        title={'courses'}
        height="40px"
        width="40px"
        />
        <p><span className='blue-text bolder'>Exclusive</span> webinar access</p>
      </div>

      <div className='points'>

        <School
        className='icon'
        color={'#ffffff'} 
        title={'courses'}
        height="40px"
        width="40px"
        />
        <p>Scholarship worth <span className='blue-text bolder'>&#8377;94500</span></p>
      </div>

      <div className='points'>

        <img src={lock} alt="nvm" height="40px" width="40px"/>
        <p><span className='blue-text bolder'>Ad Free</span> learning experience</p>
      </div>
      
    </div>
  )
}

export default Leftsection
