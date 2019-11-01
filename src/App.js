import React, { Component, Fragment } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyBanner from "./components/MyBanner";
import RegisterBox from "./components/RegisterBox";
import Detail from "./components/Detail";
import BoxTAT from "./components/BoxTAT";
import BoxKTC from "./components/BoxKTC";
import Footer from "./components/Footer";
import { Button } from "react-bootstrap";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Fragment>
        <MyNavbar />
        <MyBanner />
        <RegisterBox />
        <Button
          onClick={() => {
            console.log(this.state.data);
          }}
        >
          data
        </Button>
        <Detail />
        <BoxTAT />
        <BoxKTC />
        <Footer />
      </Fragment>
    );
  }

  getData = () => {
    fetch(`https://panjs.com/ywc.json`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      });
  };
}

export default App;
