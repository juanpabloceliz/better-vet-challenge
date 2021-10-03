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
      try {
        const {
          data: { data },
        } = await getRestaurantsByLatLng(state)
        setRestaurants(data)
        setLoading(false)
      } catch ({ response }) {
        history.push(ErrorsPaths[response.status])
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
