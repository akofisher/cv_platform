import React from 'react'
import './CV1.css'

export default function CV1() {
    return (
        <div className='main-container'>
            <div className='header-container'>Header</div>
            <div className='body-container'>
                <div className='left-container'>
                    <div className='contact-container'>Contact</div>
                    <div className='skills-container'>skills</div>
                    <div className='languages-container'>languages</div>
                </div>
                <div className='right-container'>
                    <div className='letter-container'>letter</div>
                    <div className='experience-container'>experience</div>
                    <div className='education-container'>education</div>
                </div>
            </div>
        </div>
    )
}
