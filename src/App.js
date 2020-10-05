import React from "react";

import { Home } from "./pages";
import { ApplicationProvider } from "./context/application";
import 'semantic-ui-css/semantic.min.css'
import "./App.css";

const App = () => {


  return (
    <div className="App">
      <ApplicationProvider>
        <Home />
      </ApplicationProvider>
    </div>
  );
}

export default App;
