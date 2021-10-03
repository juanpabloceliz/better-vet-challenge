import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"

import RestaurantReview from "../components/RestaurantReview"
import SpinnerLoader from "../components/SpinnerLoader"
import { getRestaurantDetails } from "../api"
import { ErrorsPaths } from "../helpers/ErrorsPaths"

const Details = () => {
  const history = useHistory()
  const { location_id } = useParams()
  const [restaurant, setRestaurant] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const payload = { location_id }

      try {
        const { data } = await getRestaurantDetails(payload)
        setRestaurant(data)
        setLoading(false)
      } catch ({ response }) {
        const errorRoute =
          ErrorsPaths[response.status] || ErrorsPaths.defaultError
        history.push(errorRoute)
      }
    }
    fetchData()
  }, [location_id, history])

  if (loading) {
    return <SpinnerLoader />
  }

  const {
    name,
    rating,
    address,
    description,
    subcategory,
    cuisine,
    reviews,
    photo,
  } = restaurant

  return (
    <main className="restaurant-details">
      <section className="restaurant-details__content">
        <div className="restaurant-details__content--row">
          <h1>{name}</h1>
          <p>{rating} ⭐️</p>
        </div>
        <div className="restaurant-details__content--row">
          <h4>{address}</h4>
        </div>
        <p>{description}</p>
        <div className="restaurant-details__content--row-align-start">
          {subcategory.length > 0 && (
            <div>
              <h3>Types of restaurant</h3>
              <ul>
                {subcategory.map(({ key, name }) => (
                  <li key={key}>{name}</li>
                ))}
              </ul>
            </div>
          )}
          {cuisine.length > 0 && (
            <div>
              <h3>Types of food</h3>
              <ul>
                {cuisine.map(({ key, name }) => (
                  <li key={key}>{name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {reviews && (
          <div>
            <h3>Reviews</h3>
            <ul>
              {reviews.map((review, index) => (
                <RestaurantReview review={review} key={index} />
              ))}
            </ul>
          </div>
        )}
      </section>
      {photo && (
        <section className="restaurant-details__image">
          <img src={photo.images.medium.url} alt={name} />
        </section>
      )}
    </main>
  )
}

export default Details
