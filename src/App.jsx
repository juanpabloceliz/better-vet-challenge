import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import { MainRoutes, ErrorRoutes } from "./routes"
import "./styles/App.scss"

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path={MainRoutes.map(({ path }) => path)}>
          <Switch>
            {MainRoutes.map(({ path, component }) => (
              <Route exact path={path} component={component} />
            ))}
          </Switch>
        </Route>
        <Route exact path={ErrorRoutes.map(({ path }) => path)}>
          <Switch>
            {ErrorRoutes.map(({ path, component }) => (
              <Route exact path={path} component={component} />
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

export default App
