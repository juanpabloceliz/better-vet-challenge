import React from "react"
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps"

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 42.368912, lng: -71.099947 }}
    />
  )
}

export default withScriptjs(withGoogleMap(Map))
