import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer class="app-footer">
        {/* ======== Footer 2 ======== */}
        <div
          style={{ backgroundColor: "#213A8F", color: "white", width: "100%" }}
        >
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0px 15px",
              maxWidth: "960px",
              fontSize: "14px"
            }}
          >
            <Row>
              <Col xs={12} sm={12} md={3} lg={3}>
                <p style={{ margin: 0, padding: "8px 16px 8px 0px" }}>
                  <b>Copyright © 2003-2019</b>
                </p>
              </Col>

              <Col xs={12} sm={12} md={9} lg={9}>
                <Row>
                  <Col xs={12} sm={4} md={4} lg={4}>
                    <p style={{ margin: 0, padding: "8px 16px" }}>
                      <b>ลงทะเบียนเข้าร่วมมาตรการ</b>
                    </p>
                  </Col>
                  <Col xs={12} sm={4} md={4} lg={4}>
                    <p style={{ margin: 0, padding: "8px 16px" }}>
                      <b>ขั้นตอนการเข้าร่วมทั้งหมด</b>
                    </p>
                  </Col>
                  <Col xs={12} sm={4} md={4} lg={4}>
                    <p style={{ margin: 0, padding: "8px 16px" }}>
                      <b>รายชื่อร้านค้าที่เข้าร่วมรายการ</b>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
