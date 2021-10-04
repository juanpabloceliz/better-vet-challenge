import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete"

import { setCoordinates } from "../actions"

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const LocationInput = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [value, setValue] = useState(null)

  useEffect(() => {
    if (value) {
      const getCoordinates = async () => {
        const geocode = await geocodeByAddress(value.label)
        const { lat, lng } = await getLatLng(geocode[0])
        dispatch(setCoordinates({ latitude: lat, longitude: lng }))
      }
      getCoordinates()
    }
  }, [value, dispatch])

  const handleSearchRestaurantsButtonClick = () => {
    history.push("/results")
  }

  return (
    <div className="home--form">
      <GooglePlacesAutocomplete
        apiKey={GOOGLE_MAPS_API_KEY}
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
      <button
        onClick={handleSearchRestaurantsButtonClick}
        className="home--form__button"
      >
        Search in that place
      </button>
    </div>
  )
}

export default LocationInput
