import NotFound from "../screens/NotFound"
import DefaultError from "../screens/DefaultError"

export const ErrorRoutes = [
  {
    path: "/not-found",
    component: NotFound,
  },
  {
    path: "/error",
    component: DefaultError,
  },
]
