import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value="" />
            <button className="search-btn">Search</button>
        </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
