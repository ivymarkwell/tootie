import React from "react";
import "./App.css";
import { Image, Nav, Navbar } from "react-bootstrap";
import tootie from "./images/tootie.png";

function App() {
  return (
    <div className="app">
      <Navbar className="gray-background">
        <Navbar.Brand>Tootie</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#getting-started">Getting Started</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="center">
        <Image src={tootie} />
        <p>Tootie is learning to code through the file structure of an app!</p>
      </div>
    </div>
  );
}

export default App;
