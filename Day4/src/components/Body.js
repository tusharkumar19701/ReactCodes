import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; // We import it using a named variable



function filterData(searchText, restaurants) {
  const filterData =  restaurants.filter((restaurant) => 
    restaurant.info.name.includes(searchText)
  );
  return filterData;
}


const Body = () => {
  //searchText is a local state variable
  const [searchText, setSearchText] = useState(""); // To create state variables  - it returns [variable name, function to update the variable]
  
  // useEffect is a hook - we call this function giving two parameters - one is the callback func. and the other is the dependency array
  // this callback func is called on every re-render,but if you dont want to call it again and again so give an empty dependency array to call it just once

  //suppose you want to call this useEffect only when the searchText changes then write searchText in the dependency array 
  useEffect(() => {

  }, []);

  const [restaurants,setRestaurants] = useState(restaurantList);

  return (
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
          const data = filterData(searchText, restaurants);
          //update the state - restaurants
          setRestaurants(data);
        }}>Search</button>

      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
 