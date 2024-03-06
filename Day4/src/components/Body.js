import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; // We import it using a named variable
import Shimmer from "./Shimmer";


function filterData(searchText, restaurants) {
  const filterData =  restaurants.filter((restaurant) => 
    restaurant?.info?.name?.toLowerCase()?. includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  //searchText is a local state variable
  const [searchText, setSearchText] = useState(""); // To create state variables  - it returns [variable name, function to update the variable]

  // const [allRestaurants, setAllRestaurants] = useState([]);

  
  // useEffect is a hook - we call this function giving two parameters - one is the callback func. and the other is the dependency array
  // this callback func is called on every re-render,but if you dont want to call it again and again so give an empty dependency array to call it just once

  //suppose you want to call this useEffect only when the searchText changes then write searchText in the dependency array 

  //empty dependency array => will be called just once and after render
  //dep array -> [searchText] => will be called once after initial render + everytime after my searchText changes
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
  
      //Optional chaining  -> ?
      // setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch(err) {
      console.log(err);
    }
  }

  const [allRestaurants,setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  if(!allRestaurants) return null; 

  return (allRestaurants?.length === 0) ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            // e.target.value => whatever you write in input
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={() => {
          //need to filter the data
          const data = filterData(searchText, allRestaurants);
          //update the state - restaurants
          setFilteredRestaurants(data);
        }}>Search</button>

      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
 