import React, { useState, useEffect } from "react"
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete"
import { useDispatch } from "react-redux"

import { setCoordinates } from "../actions"

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const LocationInput = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState(null)

  useEffect(() => {
    if (value) {
      geocodeByAddress(value.label)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) =>
          dispatch(setCoordinates({ latitude: lat, longitude: lng }))
        )
    }
  }, [value, dispatch])

  return (
    <GooglePlacesAutocomplete
      apiKey={GOOGLE_MAPS_API_KEY}
      selectProps={{
        value,
        onChange: setValue,
      }}
      style={{ width: "200px" }}
      className="home--form__input"
    />
  )
}

export default LocationInput
