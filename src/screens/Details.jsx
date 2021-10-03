import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

import { getRestaurantDetails } from "../api"
import RestaurantReview from "../components/RestaurantReview"
import SpinnerLoader from "../components/SpinnerLoader"

function Details() {
  const { location_id } = useParams()
  const [restaurant, setRestaurant] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getRestaurantDetails(location_id)
      setRestaurant(data)
      setLoading(false)
    }

    fetchData()
  }, [location_id])

  if (loading) {
    return <SpinnerLoader />
  }

  return (
    <main className="restaurant-details">
      <section className="restaurant-details__content">
        <div className="restaurant-details__content--row">
          <h1>{restaurant.name}</h1>
          <p>{restaurant.rating} ⭐️</p>
        </div>
        <div className="restaurant-details__content--row">
          <h4>{restaurant.address}</h4>
        </div>
        <p>{restaurant.description}</p>
        <div className="restaurant-details__content--row-align-start">
          {restaurant.subcategory.length > 0 && (
            <div>
              <h3>Types of restaurant</h3>
              <ul>
                {restaurant.subcategory.map(({ key, name }) => (
                  <li key={key}>{name}</li>
                ))}
              </ul>
            </div>
          )}
          {restaurant.cuisine.length > 0 && (
            <div>
              <h3>Types of food</h3>
              <ul>
                {restaurant.cuisine.map(({ key, name }) => (
                  <li key={key}>{name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {restaurant.reviews && (
          <div>
            <h3>Reviews</h3>
            <ul>
              {restaurant.reviews.map((review, index) => (
                <RestaurantReview review={review} key={index} />
              ))}
            </ul>
          </div>
        )}
      </section>
      {restaurant.photo && (
        <section className="restaurant-details__image">
          <img src={restaurant.photo.images.medium.url} alt={restaurant.name} />
        </section>
      )}
    </main>
  )
}

export default Details
