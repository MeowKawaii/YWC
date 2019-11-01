import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

export class BoxKTC extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          margin: "100px 0px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "0px 15px",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "960px"
          }}
        >
          <Row>
            <Col xs={4} sm={4} md={2}>
              <Image
                src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOF.png"
                alt="MOF"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={4} sm={4} md={2}>
              <Image
                src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/FPO.png"
                alt="FPO"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={4} sm={4} md={2}>
              <Image
                src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/CGD.png"
                alt="CGD"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={4} sm={4} md={2}>
              <Image
                src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/Krungthai.png"
                alt="Krungthai"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={4} sm={4} md={2}>
              <Image
                src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOTS.png"
                alt="MOTS"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={4} sm={4} md={2}>
              <Image
                src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/TAT.png"
                alt="TAT"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default BoxKTC;
