import React, { Fragment } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyBanner from "./components/MyBanner";
import RegisterBox from "./components/RegisterBox";
import Detail from "./components/Detail";
import BoxTAT from "./components/BoxTAT";
import BoxKTC from "./components/BoxKTC";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <MyNavbar />
      <MyBanner />
      <RegisterBox />
      <Detail />
      <BoxTAT />
      <BoxKTC />
      <Footer />
    </Fragment>
  );
}

export default App;
