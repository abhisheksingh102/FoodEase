import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const handleSearch = () => {
    const filteredRestaurants = listOfRestaurants.filter( (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRestaurant(filteredRestaurants);
  }

  const handleRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurants) => restaurants.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
  };

  return !listOfRestaurants.length ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" value={searchText} onChange={ (e) => {setSearchText(e.target.value)}} className="search-box" />
          <button onClick={ () => handleSearch()}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => handleRestaurants()}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurants) => (
          <Link key={restaurants.info.id} to={`/restaurants/${restaurants.info.id}`}><RestaurantCard resData={restaurants} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;