import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

export class BoxTAT extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          margin: "150px 0px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0px 15px",
            maxWidth: "960px"
          }}
        >
          <Row>
            <Col sm={12} md={4}>
              <Image
                src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_KTB_SQ.png"
                alt="banner_ktb"
                style={{ width: "100%" }}
              />
            </Col>
            <Col sm={12} md={4}>
              <Image
                src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_CGD_Sq.png"
                alt="banner_cgd"
                style={{ width: "100%" }}
              />
            </Col>
            <Col sm={12} md={4}>
              <Image
                src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_TAT_Hotline_Sq.png"
                alt="banner_tat"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default BoxTAT;
