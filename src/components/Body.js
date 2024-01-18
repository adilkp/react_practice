import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

    // Local state variable
    const [listofRestaurants, setListofRestaurants] = useState(resList)

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0138405&lng=77.5876668&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
        
      const json = await data.json();

      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

      setListofRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      };

    return (
      <div className="body">
        <button className="filter-btn" onClick={() => {
          const filteredList = listofRestaurants.filter(
            (res) => res.info.avgRatingString >= 4.4);
            setListofRestaurants(filteredList);
        }}>Top Rated Restaurants</button>
        <div className="res-container">
          {listofRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
        </div>
      </div>
    );
  };

  export default Body