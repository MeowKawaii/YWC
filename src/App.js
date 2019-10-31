import React, { Fragment } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyBanner from "./components/MyBanner";

function App() {
  return (
    <Fragment>
      <MyNavbar />
      <MyBanner />
    </Fragment>
  );
}

export default App;
