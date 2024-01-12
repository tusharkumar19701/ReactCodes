import { IMG_CDN_URL } from "../config";

// Config Driven UI
const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRatingString}) => {

    return (
      <div className="card">
        <img
          src={IMG_CDN_URL+cloudinaryImageId}
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRatingString} stars</h4>
      </div>
    );
  };

  export default RestaurantCard;