import React from "react";
import "./App.css";

import Network from "./Network";

function App() {
  let { isOnline, isOffline, response } = Network();

  return (
    <>
      {isOnline ? <p>Estamos Online!</p> : null}
      {isOffline ? <p>Estamos Offline!</p> : null}
      <div>Estamos {response}!</div>
    </>
  );
}

export default App;
