import React from "react"

import Map from "../components/Map"

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`

const Home = () => {
  return (
    <div>
      <Map
        googleMapURL={mapUrl}
        containerElement={<div className="map--container" />}
        mapElement={<div className="map--container__element" />}
        loadingElement={<p>Loading</p>}
      />
    </div>
  )
}

export default Home
