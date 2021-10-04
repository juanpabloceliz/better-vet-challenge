import React, { useState } from "react"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import Autocomplete from "react-google-autocomplete"

import Map from "../components/Map"
import { setCoordinates } from "../actions"
import SpinnerLoader from "../components/SpinnerLoader"

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`

const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const handleGetCurrentPosition = () => {
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

  const handleSearchRestaurants = () => {
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
        <Autocomplete
          apiKey={GOOGLE_MAPS_API_KEY}
          onPlaceSelected={(place) => {
            console.log(place)
          }}
          className="home--form__input"
        />

        <button
          onClick={handleGetCurrentPosition}
          className="home--form__button"
        >
          Get my position
        </button>
        <button
          onClick={handleSearchRestaurants}
          className="home--form__button"
        >
          Search restaurants
        </button>
      </div>
      <Map
        googleMapURL={mapUrl}
        containerElement={<div style={{ height: "300px", width: "300px" }} />}
        mapElement={<div style={{ height: "300px", width: "300px" }} />}
        loadingElement={<p>Loading</p>}
      />
    </main>
  )
}

export default Home
