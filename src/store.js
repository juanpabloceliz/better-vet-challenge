import { createStore } from "redux"
import reducer from "./reducers"

export const initialState = {
  latitude: 42.368912,
  longitude: -71.099947,
  limit: "50",
  currency: "USD",
  distance: "2",
  open_now: "false",
  lunit: "km",
  lang: "en_US",
  location_id: "",
}

export const store = createStore(reducer)
