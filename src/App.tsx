import React, { lazy, Suspense } from "react";
import { HeaderContainer, Footer, TV } from "./components/index";
import { Redirect, Route, Switch } from "react-router-dom";

import "./app.scss";
import { useDispatch, useSelector } from "react-redux";
import { getDefaltFilms } from "./redux/actions";
import { IFilms, IGenres, ISearchState } from "./redux/search-reducer";

const Films = lazy(() => import("./components/films/Films"));

function App() {
  const dispatch = useDispatch();

  const defaltFilms = useSelector<ISearchState, Array<IFilms | null>>(({search}:any) => search.defaltFilms);
  const genres = useSelector<ISearchState, Array<IGenres>>(({search}:any) => search.genres);

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
              <Suspense fallback={<div>loading...</div>}>
                <Films
                  defaltFilms={defaltFilms}
                  genres={genres}
                  dispatch={dispatch}
                  getDefaltFilms={getDefaltFilms}
                />
              </Suspense>
            );
          }}
        />

        <Route exact path="/" render={() => <Redirect to="/chennels" />}/>
        <Route path="*" render={() => <div className="not-found">404 NOT FOUND</div>}/>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
