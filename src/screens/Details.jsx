import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

import { getRestaurantDetails } from "../api"
import SpinnerLoader from "../components/SpinnerLoader"

function Details() {
  const { location_id } = useParams()
  const [restaurant, setRestaurant] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } = await getRestaurantDetails(location_id)
    setRestaurant(data)
    setLoading(false)
  }

  if (loading) {
    return <SpinnerLoader />
  }

  return <div>{restaurant.name}</div>
}

export default Details
