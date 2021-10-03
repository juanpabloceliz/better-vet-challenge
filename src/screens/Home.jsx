import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"

import { setCoordinates } from "../actions"
import Map from "../components/Map"

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`

const Home = () => {
  const history = useHistory()

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const [latLng, setLatLng] = useState({
    latitude: state.latitude,
    longitude: state.longitude,
  })

  const handleSearchRestaurants = () => {
    dispatch(setCoordinates(latLng))
    history.push("/results")
  }

  const handleInputChange = ({ target: { name, value } }) => {
    setLatLng({ ...latLng, [name]: value })
  }

  return (
    <main className="home">
      <form className="home--form">
        <div className="home--form__input">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            value={latLng.latitude}
            name="latitude"
            onChange={handleInputChange}
          />
        </div>
        <div className="home--form__input">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            value={latLng.longitude}
            name="longitude"
            onChange={handleInputChange}
          />
        </div>
        <button
          onClick={handleSearchRestaurants}
          className="home--form__button"
        >
          Search restaurants
        </button>
      </form>
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
