import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"

const Navbar = () => {
  const history = useHistory()

  const handleGoBackButtonclick = () => history.goBack()

  const handleGoForwardButtonClick = () => history.goForward()

  return (
    <nav>
      <Link to="/" className="navbar--button">
        🏠
      </Link>
      <button onClick={handleGoBackButtonclick} className="navbar--button">
        🔙
      </button>
      <button onClick={handleGoForwardButtonClick} className="navbar--button">
        🔜
      </button>
    </nav>
  )
}

export default Navbar
