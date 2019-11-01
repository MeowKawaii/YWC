import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer className="app-footer">
        {/* ======== Footer 1 ======== */}
        <div
          style={{
            padding: 30,
            fontSize: 14,
            color: "#333333",
            backgroundColor: "#FAFAFA"
          }}
        >
          <div
            className="container"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0px 15px",
              maxWidth: "1140px"
            }}
          >
            <Row>
              <Col xs={12} sm={12} md={3} lg={3}>
                <Image
                  src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"
                  alt="footer"
                  style={{ width: "108px" }}
                />
              </Col>
              <Col xs={12} sm={4} md={3} lg={3}>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#E6332A",
                    marginTop: "24px",
                    fontSize: "16px"
                  }}
                >
                  ข้อมูลลงทะเบียนประชาชน
                </div>
                <div style={{ fontSize: "14px", color: "#333333" }}>
                  การรับสิทธิ การใช้งานแอปพลิเคชั่น{" "}
                  <span className="nowrap">“เป๋าตัง”</span> และ{" "}
                  <span className="nowrap">“ถุงเงิน”</span>
                </div>
                <div style={{ fontSize: "14px", color: "#333333" }}>
                  ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.
                  <span className="nowrap">0 2111 1144</span>
                </div>
              </Col>
              <Col xs={12} sm={4} md={3} lg={3}>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#E6332A",
                    marginTop: "24px",
                    fontSize: "16px"
                  }}
                >
                  ข้อมูลลงทะเบียนผู้ประกอบการ
                </div>
                <div style={{ fontSize: "14px", color: "#333333" }}>
                  เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ
                </div>
                <div style={{ fontSize: "14px", color: "#333333" }}>
                  ติดต่อ โทร.<span className="nowrap">0 2270 6400 กด 7</span>
                </div>
              </Col>
              <Col xs={12} sm={4} md={3} lg={3}>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#E6332A",
                    marginTop: "24px",
                    fontSize: "16px"
                  }}
                >
                  ข้อมูลเที่ยวชิมช้อปใช้
                </div>
                <div style={{ fontSize: "14px", color: "#333333" }}>
                  ติดต่อ ททท.
                </div>
                <div style={{ fontSize: "14px", color: "#333333" }}>
                  โทร.<span>1672</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
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
