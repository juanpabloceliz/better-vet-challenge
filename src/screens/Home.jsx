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
    setLatLng({ ...latLng, [name]: parseFloat(value) })
  }

  return (
    <main>
      <label>Latitude</label>
      <input
        type="number"
        value={latLng.latitude}
        name="latitude"
        onChange={handleInputChange}
      />
      <label>Longitude</label>
      <input
        type="number"
        value={latLng.longitude}
        name="longitude"
        onChange={handleInputChange}
      />
      <button onClick={handleSearchRestaurants}>Search restaurants</button>
      <Map
        googleMapURL={mapUrl}
        containerElement={<div className="map--container" />}
        mapElement={<div className="map--container__element" />}
        loadingElement={<p>Loading</p>}
      />
    </main>
  )
}

export default Home
