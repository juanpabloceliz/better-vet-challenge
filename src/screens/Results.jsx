import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

import ResturantsList from "../components/ResturantsList"
import SpinnerLoader from "../components/SpinnerLoader"
import { getRestaurantsByLatLng } from "../api"
import { ErrorsPaths } from "../helpers/ErrorsPaths"

function Results() {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { data },
        } = await getRestaurantsByLatLng()
        setRestaurants(data)
        setLoading(false)
      } catch ({ response }) {
        history.push(ErrorsPaths[response.status])
      }
    }

    fetchData()
  }, [history])

  if (loading) {
    return <SpinnerLoader />
  }

  return (
    <main>{restaurants && <ResturantsList restaurants={restaurants} />}</main>
  )
}

export default Results
