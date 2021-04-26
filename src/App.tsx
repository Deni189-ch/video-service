import React from "react";
import { HeaderContainer, Footer, TV } from "./components/index";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import "./app.scss";
import { useDispatch, useSelector } from "react-redux";
import { getDefaltFilms } from "./redux/actions";

const Films = React.lazy(() => import("./components/films/Films"));

function App() {
  const dispatch = useDispatch();

  const defaltFilms = useSelector(({ search }: any) => search.defaltFilms);
  const genres = useSelector(({ search }: any) => search.genres);

  const defaltTV = useSelector(({ channels }: any) => channels.defaltTV);

  return (
    <div className="App">
      <HeaderContainer />

      <Switch>
        <Route path="/chennels" render={() => <TV defaltTV={defaltTV} />} />

        <Route
          path="/films"
          render={() => {
            return (
              <React.Suspense fallback={<div>loading...</div>}>
                <Films
                  defaltFilms={defaltFilms}
                  genres={genres}
                  dispatch={dispatch}
                  getDefaltFilms={getDefaltFilms}
                />
              </React.Suspense>
            );
          }}
        />

        <Route exact path="/" render={() => <Redirect to="/chennels" />} />
        <Route
          path="*"
          render={() => <div className="not-found">404 NOT FOUND</div>}
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
