export const setCoordinates = (payload) => {
  return { type: "@geo/setCoordinates", payload }
}

export const setLocationId = (payload) => {
  return {
    type: "@geo/setLocationId",
    payload,
  }
}

export { actionsTypes } from "./actionsTypes"
