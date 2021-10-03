import { initialState } from "../store"
import { actionsTypes } from "../actions"

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.SET_COORDINATES:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      }
    case actionsTypes.SET_LOCATION_ID:
      return {
        ...state,
        location_id: action.payload,
      }
    default:
      return state
  }
}
