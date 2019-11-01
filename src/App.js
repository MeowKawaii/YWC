import React, { Fragment } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyBanner from "./components/MyBanner";
import RegisterBox from "./components/RegisterBox";

function App() {
  return (
    <Fragment>
      <MyNavbar />
      <MyBanner />
      <RegisterBox />
    </Fragment>
  );
}

export default App;
