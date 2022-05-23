import React from "react";
import Dialogue from "./dialogue";
import {nameContext} from "./nameContext";

export function App() {
    const context = nameContext;
const name = "Daniel";
  return (
      <>
          <h1>Hello, World!</h1>
          <context.Provider value={name}>
              <Dialogue/>
          </context.Provider>
      </>

  );
}

export default App;
