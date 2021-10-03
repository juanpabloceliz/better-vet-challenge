import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import { MainRoutes, ErrorRoutes } from "../routes"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={MainRoutes.map(({ path }) => path)}>
          <Switch>
            {MainRoutes.map(({ path, component }, index) => (
              <Route exact path={path} component={component} key={index} />
            ))}
          </Switch>
        </Route>
        <Route exact path={ErrorRoutes.map(({ path }) => path)}>
          <Switch>
            {ErrorRoutes.map(({ path, component }, index) => (
              <Route exact path={path} component={component} key={index} />
            ))}
          </Switch>
        </Route>
        <Route path="*">
          <Redirect to={ErrorRoutes[0].path} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
