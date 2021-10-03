import axios from "./axios.config"

export const getRestaurantsByLatLng = (params) => {
  return axios.get("/list-by-latlng", {
    params,
  })
}

export const getRestaurantDetails = (location_id) => {
  return axios.get("/get-details", {
    params: { location_id: location_id, currency: "USD", lang: "en_US" },
  })
}
