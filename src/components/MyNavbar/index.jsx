import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";

class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Navbar expand="lg" className="justify-content-end">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ borderColor: "white" }}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Item>
                <Nav.Link href="#home" style={{ float: "right" }}>
                  Active
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#home" style={{ float: "right" }}>
                  Link
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#home" style={{ float: "right" }}>
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
