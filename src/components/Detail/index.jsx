import React, { Component} from "react";

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
            <p style={{ color: "#E6332A", fontSize: "36px" }}>
              <b>
                มาตรการส่งเสริมการบริโภค <br />
                ในประเทศ “ชิมช้อปใช้”
              </b>
            </p>
            <div style={{ marginTop: 24 }}>
              <p style={{ margin: 0, fontSize: 18 }}>
                ผู้สนใจเข้าร่วมมาตรการส่งเสริมการบริโภคในประเทศ “ชิมช้อปใช้”
                รับเงินผ่าน “เป๋าตัง” {"("}G-Wallet{")"} รวมจำนวน 13 ล้านคน
                ลงทะเบียนรับสิทธิ ได้ทางเว็บไซต์ www.ชิมช้อปใช้.com
                <br />
                ตั้งแต่วันที่ 23 กันยายน - 15 พฤศจิกายน 2562 {"("}รับลงทะเบียน
                เฟส 2 ตั้งแต่วันที่ 24 ตุลาคม 2562 จำกัดจำนวนผู้ลงทะเบียน 1
                ล้านคนต่อวัน จนกว่าจะครบ 3 ล้านคน{")"}
              </p>
            </div>

            <div style={{ marginTop: 24 }}>
              <p style={{ margin: 0, fontSize: 18 }}>
                <b>เงื่อนไขการเข้าร่วมมาตรการ</b>
              </p>
              <p style={{ margin: "8px 0px 0px 0px", fontSize: 18 }}>
                1. เป็นบุคคลสัญชาติไทย มีบัตรประจำตัวประชาชน
                <br />
                2. มีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป ณ วันที่ลงทะเบียน
                <br />
                3.
                มีโทรศัพท์มือถือสมาร์ทโฟนที่สามารถเชื่อมต่อสัญญาณอินเทอร์เน็ตและมีอีเมล
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
