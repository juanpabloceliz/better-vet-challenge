import axios from "./axios.config"

export const getRestaurantsByLatLng = () => {
  return axios.get("/list-by-latlng", {
    params: {
      latitude: "42.368912",
      longitude: "-71.099947",
      limit: "50",
      currency: "USD",
      distance: "2",
      open_now: "false",
      lunit: "km",
      lang: "en_US",
    },
  })
}

export const getRestaurantDetails = (location_id) => {
  return axios.get("/get-details", {
    params: { location_id: location_id, currency: "USD", lang: "en_US" },
  })
}
