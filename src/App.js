import React, { Fragment } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyBanner from "./components/MyBanner";
import RegisterBox from "./components/RegisterBox";
import Detail from "./components/Detail";
import BoxTAT from "./components/BoxTAT";
import BoxKTC from "./components/BoxKTC";

function App() {
  return (
    <Fragment>
      <MyNavbar />
      <MyBanner />
      <RegisterBox />
      <Detail />
      <BoxTAT />
      <BoxKTC />
    </Fragment>
  );
}

export default App;
