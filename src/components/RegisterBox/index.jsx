import React, { Component } from "react";
import { Button } from "react-bootstrap";
export class RegisterBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          margin: "0 0 26 0",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <p>
          <b>ตั้งแต่วันที่</b>
        </p>
        <p>
          <span
            style={{ marginTop: "-10px", fontSize: "48px", color: "#E6332A" }}
          >
            <b>{this.props.duration}</b>
          </span>
        </p>
        <Button
          size="lg"
          block
          style={{
            width: "60%",
            margin: "10px 0",
            backgroundColor: "#213A8F",
            boxShadow: "0 15px 30px 0 rgba(28, 78, 132, 0.4)"
          }}
          onClick={() => {
            console.log("eiei");
          }}
        >
          <span style={{ fontSize: 24 }}>
            <b>
              ขณะนี้มีผู้ลงทะเบียนสิทธิมาตรการฯ "ชิมช้อปใช้"
              ครบตามจำนวนที่กำหนดแล้ว
              <br />
              ขอขอบพระคุณอย่างยิ่งที่ท่านสนใจในการเข้าร่วมมาตรการฯ
            </b>
          </span>
        </Button>
        <hr style={{ marginTop: "-3%", width: "95%", zIndex: -1 }} />
      </div>
    );
  }
}

export default RegisterBox;
