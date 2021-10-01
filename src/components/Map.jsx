import React from "react"
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps"

function Map() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -34.92122, lng: -57.954221 }}
    />
  )
}

export default withScriptjs(withGoogleMap(Map))
