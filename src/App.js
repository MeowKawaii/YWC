import React, { Fragment } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <Fragment>
      <MyNavbar />
      <div style={{ width: "100%", backgroundColor: "red" }}>eiei</div>
    </Fragment>
  );
}

export default App;
