import React from 'react'
import './AddItem.css'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
const AddItem = () => {
  return (
    <>
        <div className='additem-nav'>
            <img src='./Images/KitchenaryLogo.png'></img>
            <NavLink to='/'><div className='back-btn'>
            <i class='bx bx-left-arrow-alt'></i>
            </div></NavLink>
        </div>

        <div className='additem-section'>
            <div className='additem-form'>
                <form>
                <div className='photo-selector'>
                    <div className='selector-input'>
                    <label>Upload Item Photo</label>
                    <div>
                    <input type='file'></input>
                    </div>
                    </div>
                    
                    <div className='selector-input'>
                    <label>Upload Restaurant Photo</label>
                    <div>
                    <input type='file'></input>
                    </div>
                    </div>
                    
                </div>

                <div className='item-input'>
                    <label>Item Name</label>
                    <input 
                    type='text'
                    placeholder='Enter item name'
                    ></input>
                </div>

                <div>
                    <div className='ratting-input'>
                        <label>Item Ratting</label>
                        <input
                        type='number'
                        placeholder='Enter item ratting'
                        ></input>
                    </div>

                    <div className='time-input'>
                        <label>Preparation time</label>
                        <input
                        type='text'
                        placeholder='Preparation time (in minutes)'
                        ></input>
                    </div>
                </div>

                <button
                className='additem-submit'
                type='submit'
                >Submit</button>
                    
                    
                </form>
            </div>

            <img className='chefleft' src='./Images/additem.jpg'></img>
            <img className='chefup' src='./Images/chefup.jpg'></img>
        </div>
        <Footer/>
    </>
  )
}

export default AddItem
