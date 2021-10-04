import React, { useState } from "react"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"

import { setCoordinates } from "../actions"
import SpinnerLoader from "../components/SpinnerLoader"

const CurrentPositionButton = () => {
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
    history.push("/results")
  }

  const onGetCurrentPositionError = (err) => {
    alert("Ups! Was not possible get your position, try again later.")
  }

  if (loading) {
    return <SpinnerLoader />
  }

  return (
    <button
      onClick={handleGetCurrentPositionButtonClick}
      className="home--form__button"
    >
      Near my current location
    </button>
  )
}

export default CurrentPositionButton
