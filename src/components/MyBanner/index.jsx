import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";

export class MyBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col xs={4} md={4} style={{ padding: 0 }}>
            <img
              src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/hero_banner/banner-left.png"
              alt="banner-left"
              style={{ width: "100%", height: "80%" }}
            />
          </Col>
          <Col xs={4} md={4} style={{ padding: 0, position: "relative" }}>
            <img
              src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/banner.png"
              alt="banner"
              style={{
                position: "absolute",
                width: "50%",
                margin: "10% 0 0 25%"
              }}
            />
            <img
              src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/hero_banner/banner-center.png"
              alt="banner-center"
              style={{ width: "100%", height: "80%" }}
            />
          </Col>
          <Col xs={4} md={4} style={{ padding: 0 }}>
            <img
              src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/hero_banner/banner-right.png"
              alt="banner-right"
              style={{ width: "100%", height: "80%" }}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default MyBanner;
