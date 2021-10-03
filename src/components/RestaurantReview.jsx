import React from "react"

const RestaurantReview = ({ review: { title, rating, summary } }) => {
  return (
    <li className="restaurant-details__content--review">
      <div className="restaurant-details__content--row">
        <h4>{title}</h4>
        <p>{rating} ⭐️</p>
      </div>
      <p>{summary}</p>
    </li>
  )
}

export default RestaurantReview
