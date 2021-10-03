import React, { useEffect, useState } from "react"

import { getRestaurantsByLatLng } from "../api"
import ResturantsList from "../components/ResturantsList"
import SpinnerLoader from "../components/SpinnerLoader"

function Results() {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {
      data: { data },
    } = await getRestaurantsByLatLng()
    setRestaurants(data)
    setLoading(false)
  }

  if (loading) {
    return <SpinnerLoader />
  }

  return (
    <main>{restaurants && <ResturantsList restaurants={restaurants} />}</main>
  )
}

export default Results
