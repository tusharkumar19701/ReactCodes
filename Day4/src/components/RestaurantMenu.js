import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(restaurant);
    }

    useEffect(() => {
      getInfo();
    },[]);

    
    async function getInfo() {
      if (restaurant) {
          setRestaurant(restaurant.find((item) => item?.info?.id === id));
          // console.log(restaurant) 
      }
  }


    console.log(restaurant)


    
    

    return (
      <div>
          <h1>Restaurant id: {id}</h1>
          {restaurant ? (
              <>
                  <h2>{restaurant?.info?.name}</h2>
                  <div>
                      <h1>Menu</h1>
                      <h2>{restaurant?.info?.locality}</h2>
                  </div>
              </>
          ) : (
              <p>Loading...</p>
          )}
      </div>
  );
}

export default RestaurantMenu;