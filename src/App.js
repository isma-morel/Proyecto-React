import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./assets/components/containers/Home/Home";
import { ItemListContainer } from "./assets/components/containers/ItemListContainer/ItemListContainer";
import { Error } from "./assets/components/Error/Error";
import { NavBar } from "./assets/components/NavBar/NavBar";

const routes = [
  {
    key: 1,
    path: "/",
    comp: <Home />,
  },
  {
    key: 2,
    path: "/watches",
    comp: <ItemListContainer />,
  },
  {
    key: 3,
    path: "/*",
    comp: <Error />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {routes.map(({ key, path, comp }) => {
          return (
            <Route key={key} exact path={path}>
              {comp}
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
