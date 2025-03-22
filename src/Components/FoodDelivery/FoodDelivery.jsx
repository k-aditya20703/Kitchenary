import React, { useState } from 'react'
import './FoodDelivery.css'
import { food } from '../../Constants/Food'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'

const FoodDelivery = () => {
    const [showFoodcard,setShowFoodcard] = useState(food)

    const comparePrice = showFoodcard.filter(foodPrice=>foodPrice.price >=300 )
    console.log(comparePrice);
    const handleBetween = ()=>{
      setShowFoodcard(comparePrice);
    }
    const ratting = showFoodcard.filter(foodRatting=>Number(foodRatting.ratting)>=3);
    const handleRatting = ()=>{
      setShowFoodcard(ratting);
    }
    
    const delivery = showFoodcard.filter(fastDelivery=>Number(fastDelivery.time)<35);
    const handleFastDelivery = ()=>{
      setShowFoodcard(delivery);
    }

    const newData = showFoodcard.filter(food=>food.price<=300);
    const handleLessthen =()=>{
      setShowFoodcard(newData);
    }
  return (
    <>
        <div className='foodnavbar-section'>
            <NavLink to='/'><div className='logo-container'>
              <img src='./Images/KitchenaryLogo.png'></img>
            </div></NavLink>

            <NavLink to='/'><div className='back-btn'>
              <i class='bx bx-left-arrow-alt' ></i>
            </div></NavLink>  
        </div>

        
          <div className='fooddelivery-header'><h2>Restaurants with online food delivery</h2></div>
          <div className='foodbtn-section'>
                <button>Filter<i class='bx bx-slider-alt'></i></button>
                <button>Sort by<i class='bx bx-chevron-down' ></i></button>
                <button onClick={handleFastDelivery}>Fast Delivery</button>
                <button onClick={handleRatting}>Rating 4.0+</button>
                <button onClick={handleBetween}>Less then Rs.600</button>
                <button onClick={handleLessthen}>Less then Rs.300</button>
            </div>

        <div className='foodcard-section'>
            
            {showFoodcard&&<div className='foodcard-container'>
            {
                showFoodcard.map((foodData,index)=>(
                    <div key={index} className='food-card'>
                    <div className='foodimg-section'>
                        <img src={foodData.photo}></img>
                    </div>

                    <div className='fooddetail-section'>
                        <h3>{foodData.name}</h3>
                        <p><i class='bx bxs-star' ></i><span>{foodData.ratting},{foodData.time} mins</span></p>
                        <p>{foodData.itoms}</p>
                        <p>{foodData.location}</p>
                        <p></p>
                    </div>
                    </div>
                ))
            }
                
            </div>}
        </div>
        <Footer/>
    </>
  )
}

export default FoodDelivery
