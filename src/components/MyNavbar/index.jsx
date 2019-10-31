import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HamburgerSlider } from "react-animated-burgers";

class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }
  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <Fragment>
        <Navbar
          sticky="top"
          expand="sm"
          className="justify-content-end"
          style={{
            height: "64px",
            boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.1)",
            backgroundColor: "white"
          }}
        >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ borderColor: "white", padding: 0 }}
            children={
              <HamburgerSlider
                isActive={this.state.isActive}
                toggleButton={this.toggleButton}
                buttonColor="white"
                barColor="black"
                buttonWidth={30}
                style={{ padding: "4px 12px" }}
              />
            }
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Item>
                <Nav.Link
                  href="#home"
                  style={{ float: "right", fontWeight: "bold",color:'black',padding:'14px 15px' }}
                >
                  Active
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#home"
                  style={{ float: "right", fontWeight: "bold",color:'black',padding:'14px 15px' }}
                >
                  Link
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#home"
                  style={{ float: "right", fontWeight: "bold",color:'black',padding:'14px 15px' }}
                >
                  Link
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default MyNavbar;
