import React, { Fragment } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyBanner from "./components/MyBanner";
import RegisterBox from "./components/RegisterBox";
import Detail from "./components/Detail";

function App() {
  return (
    <Fragment>
      <MyNavbar />
      <MyBanner />
      <RegisterBox />
      <Detail />
    </Fragment>
  );
}

export default App;
