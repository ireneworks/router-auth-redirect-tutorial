import React from "react";
import Dialogue from "./dialogue";
import {nameContext} from "./nameContext";
import { Route, Switch } from "react-router-dom";

export function App() {
    const context = nameContext;
const name = "Daniel";
  return (
      <>
          <h1>Hello, World!</h1>
          <context.Provider value={name}>
              <Dialogue/>
          </context.Provider>
          <ul>
              <li>
                  <Link to='/public'>PublicPage</Link>
              </li>
              <li>
                  <Link to='/private'>PrivatePage</Link>
              </li>
          </ul>
    <Switch>



        <Route path='/public'>
            <PublicPage/>
        </Route>
    </Switch>
      </>

  );
}

export default App;
