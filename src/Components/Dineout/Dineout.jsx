import React from 'react'
import './Dineout.css'
import { NavLink } from 'react-router-dom';
import { food } from '../../Constants/Food';
import { TableBooking } from '../../Constants/TableBooking';
import Footer from '../Footer/Footer';

const Dineout = ({showRestaurants,setShowRestaurants}) => {
    const restDistance = showRestaurants.filter(distance=>distance.distance<=5);
    const handleDistance = ()=>{
      setShowRestaurants(restDistance);
    }
  
    const restRatting = showRestaurants.filter(ratting=>ratting.rating>=3);
    const handleRating = ()=>{
      setShowRestaurants(restRatting);
    }
  return (
    <>
            <div className='dineoutnavbar-section'>
                        <NavLink to='/'><div className='logo-container'>
                            <img src='./Images/KitchenaryLogo.png'></img>
                        </div></NavLink>

                        

                        <NavLink to='/'><div className='back-btn'>
                        <i class='bx bx-left-arrow-alt' ></i>
                        </div></NavLink> 
            </div>

            <div className='dineout-body'>
                  <div className='coverPicture'>
                    <img className='restaurant' src='./images/restaurant.jpg' alt='restuaurant'></img>
                    <img className='CoverPicture-logo' src='./images/KitchenaryLogo.png' alt='myimg'/>
                    <div className='coverText'>
                    <p>Explore Best Restaurants</p>
                    <p>Nearby You ...</p>
                    </div>
                  </div>
            </div>


            <div className='input-btn-container'>
                <div className='dineout-input-container'>
                    <input
                    placeholder='Search Restaurants'
                    ></input>
                    <button><i class='bx bx-search-alt-2'></i></button>
                </div>
                <div className='btn-section'>
                    <button>Filter<i class='bx bx-slider-alt'></i></button>
                    <button>Sort by<i class='bx bx-chevron-down' ></i></button>
                    <button>With in 5km</button>
                    <button>Rating 3.0+</button>
                </div>
            </div>

            <div className='sliderdata-container'>
                        
                        {
                            TableBooking.map((TableData,index)=>{
                            return(
                            <NavLink to='/tablebooking'><div key={index} className='slider-card'>
                            <div className='slider-img'>
                                <img style={{position:'relative'}} src={TableData.image}></img>
                                <img style={{position:'absolute', left:'0', top:'0'}} src='../../images/shadow.png'></img>
                                <h2>{TableData.name}</h2>
                            </div>
            
                            <div className='slider-detail'>
                            <div className='restaurant-discreption'>
                                <div>
                                    <p>{TableData.category}</p>
                                    <p>{TableData.location}</p>
                                </div>
                                <div>
                                    <p>{TableData.price} per two</p>
                                    <p style={{textAlign:'right'}}>{TableData.distance}km</p>
                                </div>
                            </div>
                            
                            <div className='dineout-ratting-section'>
                            <div className='booking-tag'>
                                <i class='bx bxs-calendar-check'></i>
                                <p>Table Booking</p>
                            </div>

                            <NavLink to='/ratting'><div className='ratting-container'>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star-half' ></i>
                            </div></NavLink>
                            </div>
            
                            <div className='offer-section'>
                                <div className='offer-btn'>
                                <i class='bx bxs-offer'></i>
                                <p>Flat {TableData.offer} off on pre-booking</p>
                                </div>
                                <p>+2 more</p>
                            </div>
            
                            <div className='bank-offer'>
                                <p>Upto 10% off with bank offers</p>
                            </div>
            
                            </div>
                            </div></NavLink>
                            
                                )
                            })
                            }
                        </div>

                        <Footer/>
    </>
  )
}

export default Dineout
