import React, { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"

const ResturantList = ({ restaurants }) => {
  const [restaurantsToRender, setRestaurantsToRender] = useState([])

  useEffect(() => {
    const filterRestaurantsByData = () => {
      const filteredRestaurants = []

      restaurants.forEach((restaurant) => {
        const { name, rating, num_reviews, price_level, location_id } =
          restaurant

        if (name && rating && num_reviews && price_level && location_id) {
          filteredRestaurants.length < 10 &&
            filteredRestaurants.push(restaurant)

          setRestaurantsToRender(filteredRestaurants)
        }
      })
    }
    filterRestaurantsByData(restaurants)
  }, [restaurants])

  return (
    <section>
      {restaurantsToRender.length > 0 ? (
        <ul className="restaurants-list">
          {restaurantsToRender.map((restaurant, index) => (
            <RestaurantCard restaurant={restaurant} key={index} />
          ))}
        </ul>
      ) : (
        <div className="full-screen-centered">
          <p>It seems there is no restaurants near this location</p>
        </div>
      )}
    </section>
  )
}

export default ResturantList
