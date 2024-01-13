import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react"; // We import it using a named variable



function filterData(searchText, restaurants) {
  const filterData =  restaurants.filter((restaurant) => 
    restaurant.info.name.includes(searchText)
  );
  return filterData;
}


const Body = () => {
  //searchText is a local state variable
  const [searchText, setSearchText] = useState(""); // To create state variables  - it returns [variable name, function to update the variable]
  
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
 