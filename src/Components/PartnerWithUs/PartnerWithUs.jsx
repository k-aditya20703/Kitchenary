import React from 'react'
import './PartnerWithUs.css'
import { NavLink } from 'react-router-dom'

const PartnerWithUs = () => {
  return (
    <>
        <div className='partner-header'>
            <NavLink to='/'><img className='partner-logo' src='./images/KitchenaryLogo.png'></img></NavLink>
            <h1>Access to Kitchenary <span>tools and support</span></h1>
        </div>

        <div className='partner-body'>
            {/* <div>
            <img src='./images/Parcel.jpg'></img>
            </div> */}
            <div className='form-section'>
                <form>
                    <h2>Get Started</h2>
                    <label>Enter a mobile Number To Continue</label>
                    <input 
                    type='tel' 
                    name='phone' 
                    placeholder='1234-567-890'
                    pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}'
                    required> 
                    </input>
                    <button>Continue</button>
                    <p>By Loggingin I agree to all <a href='#'>term & conditions</a></p>
                </form>
            </div>
        </div>
    </>
  )
}

export default PartnerWithUs
