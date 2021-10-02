import React from "react"
import RestaurantCard from "./RestaurantCard"

const ResturantList = ({ restaurants }) => {
  return (
    <ol className="restaurants-list">
      {restaurants.map((restaurant, index) => (
        <RestaurantCard restaurant={restaurant} key={index} />
      ))}
    </ol>
  )
}

export default ResturantList
