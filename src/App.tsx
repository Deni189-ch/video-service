import React, { lazy, Suspense } from "react";
import { Header, Footer, TV, Login  } from "./components/index";
import { Redirect, Route, Switch, useHistory, } from "react-router-dom";

import "./app.scss";

const FilmsContainer = lazy(() => import("./components/films/Films"));


function App() {

  const history = useHistory();

  const RedirectFn = (path: string) => { 
    debugger
    history.push(path)
   };

   

 
  return (
    <div className="App">
      <Header RedirectFn={RedirectFn} />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          
          <Route path="/chennels" render={() => <TV />} />

          <Route path="/films" component={FilmsContainer} />

          <Route path="/login" render={() => <Login RedirectFn={RedirectFn} /> } />


          <Route exact path="/" render={() => <Redirect to="/chennels" />} />
          <Route path="*" render={() => <div className="not-found">404 NOT FOUND</div>} />
        </Switch>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;

//withSuspense
