import React, { Fragment } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <Fragment>
      <MyNavbar />
      <div style={{ width: "100%", backgroundColor: "red",zIndex:'-1' }}>eiei</div>
      <div style={{ height: "1000px" }}>ทดสอบๆ</div>
    </Fragment>
  );
}

export default App;
