import React from "react"
import { Link } from "react-router-dom"

const RestaurantCard = ({
  restaurant: { name, rating, price_level, num_reviews, photo, location_id },
}) => {
  return (
    <Link to={`/details/${location_id}`}>
      <li className="restaurant-card">
        {photo ? (
          <img
            src={photo.images.medium.url}
            alt={name}
            className="restaurant-card__image"
          />
        ) : (
          <div className="restaurant-card__default-image" />
        )}
        <div className="restaurant-card__content">
          <h4>{name}</h4>
          <div>
            <p>{rating}⭐️</p>
            <p>{num_reviews}</p>
            <p>{price_level}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantCard
