import React, { Component } from "react";
import "./styles.css";

export class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          margin: "70px 0px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "83%"
          }}
        >
          <div style={{ width: "75%" }}>
            <p style={{ color: "#E6332A" }} className="title">
              <b>
                มาตรการส่งเสริมการบริโภค <br />
                ในประเทศ “ชิมช้อปใช้”
              </b>
            </p>
            <div style={{ marginTop: 24 }}>
              <p style={{ margin: 0 }} className="detail">
                <div dangerouslySetInnerHTML={{ __html: this.props.detail }} />
              </p>
            </div>

            <div style={{ marginTop: 24 }}>
              <p style={{ margin: 0}} className="titleDetail">
                <b>เงื่อนไขการเข้าร่วมมาตรการ</b>
              </p>
              <p style={{ margin: "8px 0px 0px 0px" }} className="detail">
                <div
                  dangerouslySetInnerHTML={{ __html: this.props.condition }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
