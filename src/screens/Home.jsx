import React, { useState } from "react"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"

import { setCoordinates } from "../actions"
import SpinnerLoader from "../components/SpinnerLoader"
import LocationInput from "../components/LocationInput"

const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const handleGetCurrentPositionButtonClick = () => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      onGetCurrentPositionSuccess,
      onGetCurrentPositionError
    )
  }

  const onGetCurrentPositionSuccess = ({ coords }) => {
    dispatch(
      setCoordinates({
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
    )
    setLoading(false)
  }

  const onGetCurrentPositionError = (err) => {
    alert("Ups! Was not possible get your position, try again later.")
  }

  const handleSearchRestaurantsButtonClick = () => {
    history.push("/results")
  }

  if (loading) {
    return <SpinnerLoader />
  }

  return (
    <main className="home">
      <h1 className="home--title">Restaurant Searcher</h1>
      <p className="home--description">
        Search a restaurant by direction or your current location
      </p>
      <div className="home--form">
        <LocationInput />
        <button
          onClick={handleGetCurrentPositionButtonClick}
          className="home--form__button"
        >
          Get my position
        </button>
        <button
          onClick={handleSearchRestaurantsButtonClick}
          className="home--form__button"
        >
          Search restaurants
        </button>
      </div>
    </main>
  )
}

export default Home
