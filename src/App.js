import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

import MainPage from "./pages/MainPage";

function App() {

  return (
    <Switch>
      <Route exact path={"/"}>
        <MainPage />
      </Route>
      <Route exact path={"/:id"}>
        <MainPage />
      </Route>
    </Switch>
  );
}

export default App;
