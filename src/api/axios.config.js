import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_TRAVEL_ADVISOR_API_URL

axios.defaults.headers = {
  "x-rapidapi-host": process.env.REACT_APP_TRAVEL_ADVISOR_API_HOST,
  "x-rapidapi-key": process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
}

export default axios
