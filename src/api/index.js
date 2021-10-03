import axios from "./axios.config"

export const getRestaurantsByLatLng = (payload) => {
  return axios.get("/list-by-latlng", {
    params: payload,
  })
}

export const getRestaurantDetails = (payload) => {
  return axios.get("/get-details", {
    params: payload,
  })
}
