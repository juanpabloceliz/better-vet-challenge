import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"

const Navbar = () => {
  const history = useHistory()

  const handleGoBack = () => history.goBack()

  const handleGoForward = () => history.goForward()

  return (
    <nav>
      <Link to="/" className="navbar--button">
        🏠
      </Link>
      <button onClick={handleGoBack} className="navbar--button">
        🔙
      </button>
      <button onClick={handleGoForward} className="navbar--button">
        🔜
      </button>
    </nav>
  )
}

export default Navbar
