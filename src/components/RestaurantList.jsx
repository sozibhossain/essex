import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [neighborhood, setNeighborhood] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/deliveroo-interviews/fc29b2ae38280bf30f4d022a68f96a86/raw/497f74503512fc1a873c9d9eb7d3a655ebadf138/web_restaurant_list.json"
        );
        const data = await response.json();
        setNeighborhood(data?.body?.neighborhood ?? "");
        setRestaurants(data?.body?.restaurants ?? []);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="restaurants">
      <div className="container">
        <p className="restaurants__count">
          {restaurants.length} Restaurants{neighborhood ? ` in ${neighborhood}` : ""}
        </p>

        <div className="restaurants__list">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              imageUrl={restaurant.image} 
              price={restaurant.price}
              tags={restaurant.tags}
              url={restaurant.url} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
