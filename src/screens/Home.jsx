import React from "react"

import LocationInput from "../components/LocationInput"
import CurrentPositionButton from "../components/CurrentPositionButton"

const Home = () => {
  return (
    <main className="home">
      <h1 className="home--title">Restaurant Searcher</h1>
      <p className="home--description">
        Search a restaurant by direction or your current location
      </p>
      <div className="home--form">
        <LocationInput />

        <CurrentPositionButton />
      </div>
    </main>
  )
}

export default Home
