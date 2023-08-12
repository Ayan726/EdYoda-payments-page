import React from 'react'
import { CaretDownOutline } from 'react-ionicons'
import { SearchOutline } from 'react-ionicons'
import '../styles/nav.css'

const Navbar = () => {
    return (
        <nav>
            <div className='total'>
            <ul className='left'>
                <li>
                    <h1 className='logo'>EDYODA</h1>
                </li>

                <li>
                    Courses

                    <CaretDownOutline
                        className ='icon'
                        color={'#380036'}
                        title={'arrow'}
                        height="20px"
                        width="20px"
                    />
                </li>

                <li>
                    Programs
                    <CaretDownOutline
                        className ='icon'
                        color={'#380036'}
                        title={'arrow'}
                        height="20px"
                        width="20px"
                    />
                </li>

            </ul>

            <ul className='right'>
                <li>

                    <SearchOutline
                        className = 'icon'
                        color={'#380036'}
                        title={'search'}
                        height="20px"
                        width="20px"
                    />
                </li>

                <li className='underline'>
                    Log In
                </li>

                <li>
                    <button className='btn-blue'>Join Now</button>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
