import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantList, setListOfRestaurant] = useState([])
    const [filteredRestaurantList, setfilteredRestaurantList] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9128039&lng=77.6043174&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurantList.length === 0 ? (<Shimmer />) : (<div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="text-box" value={searchText} onChange={(e) => { setSearchText(e.target.value) }
                }>
                </input>
                <button className="search-btn" onClick={() => {
                    const filteredRestaurant = restaurantList.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setfilteredRestaurantList(filteredRestaurant)
                }
                }>Search</button>
            </div>
            <button className="filter-btn" onClick={() => {
                const filteredList = restaurantList.filter((res) => res.info.avgRating > 4.4)
                setfilteredRestaurantList(filteredList)
            }}>Top rated Restaurants</button>
        </div>
        <div className="res-container">
            {
                filteredRestaurantList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
            }
        </div>
    </div>)
}

export default Body;