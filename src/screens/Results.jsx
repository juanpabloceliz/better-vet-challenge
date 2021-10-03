import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

import ResturantsList from "../components/ResturantsList"
import SpinnerLoader from "../components/SpinnerLoader"
import { getRestaurantsByLatLng } from "../api"
import { ErrorsPaths } from "../helpers/ErrorsPaths"
import { useSelector } from "react-redux"

const Results = () => {
  const history = useHistory()
  const state = useSelector((state) => state)
  const [loading, setLoading] = useState(true)
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const payload = state

      try {
        const {
          data: { data },
        } = await getRestaurantsByLatLng(payload)
        setRestaurants(data)
        setLoading(false)
      } catch ({ response }) {
        const errorRoute =
          ErrorsPaths[response.status] || ErrorsPaths.defaultError
        history.push(errorRoute)
      }
    }

    fetchData()
  }, [history, state])

  if (loading) {
    return <SpinnerLoader />
  }

  return (
    <main>{restaurants && <ResturantsList restaurants={restaurants} />}</main>
  )
}

export default Results
