import React from "react"
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps"
import { useSelector } from "react-redux"

const Map = () => {
  const state = useSelector((state) => state)

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: state.latitude, lng: state.longitude }}
    />
  )
}

export default withScriptjs(withGoogleMap(Map))
