import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

export class RegisterBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "#213A8F",
      shadow: ""
    };
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
          <span className="durationTime">
            <b>{this.props.duration}</b>
          </span>
        </p>
        <Button
          size="lg"
          block
          style={{
            width: "60%",
            margin: "10px 0",
            backgroundColor: `${this.state.backgroundColor}`,
            boxShadow: `${this.state.shadow}`,
            border: 0
          }}
          onMouseEnter={this.backgroundColorYellow}
          onMouseLeave={this.backgroundColorBlue}
          onMouseUp={this.backgroundColorBlue}
          onMouseDown={this.backgroundColorYellow}
        >
          <span className="buttonRegister">
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

  backgroundColorBlue = () => {
    this.setState({
      backgroundColor: "#213A8F",
      shadow: "0 15px 30px 0 rgba(28, 78, 132, 0.4)"
    });
  };

  backgroundColorYellow = () => {
    this.setState({
      backgroundColor: "#FBBC33",
      shadow: "none"
    });
  };
}

export default RegisterBox;
