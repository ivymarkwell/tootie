import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import CustomMenu from "../materials/CustomMenu";
import CustomToggle from "../materials/CustomToggle";
import "../../App.css";

// TODO: make custom dropdown component
function TicTacToe() {
  return (
    <div style={{ height: "93%" }}>
      <Card className="instructions">
        <Card.Body>
          <Card.Title>Instructions</Card.Title>
          <Card.Text>These are the instructions.</Card.Text>
        </Card.Body>
      </Card>
      <div className="bottom-area">
        <Card className="sidebar">
          <Card.Body>
            <Card.Title>Files</Card.Title>
            <Card.Text id="public-folder">
              <Dropdown as={CustomToggle}>
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "#ffffff",
                    border: "none",
                    color: "black",
                    paddingBottom: 0,
                    paddingLeft: 0
                  }}
                >
                  public
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu} />
              </Dropdown>
            </Card.Text>
            <Card.Text>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "#ffffff",
                    border: "none",
                    color: "black",
                    paddingBottom: 0,
                    paddingLeft: 0
                  }}
                >
                  src
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">index.css</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">index.js</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Text>
            <Card.Text>.gitignore</Card.Text>
            <Card.Text>README.md</Card.Text>
            <Card.Text>package-lock.json</Card.Text>
            <Card.Text>package.json</Card.Text>
          </Card.Body>
        </Card>
        <Card className="code-editor">
          <Card.Body>
            <Card.Title>Code</Card.Title>
            <Card.Text>Code stuff</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TicTacToe;
