import React, { useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import CustomMenu from "../materials/CustomMenu";
import CustomToggle from "../materials/CustomToggle";
import "../../App.css";

function TicTacToe() {
  const [publicFolderOpen, setPublicFolderOpen] = useState(false);
  const [srcFolderOpen, setSrcFolderOpen] = useState(false);

  const publicDiv =
    "<div id='public-folder-files' style='margin-left: 20px;'><div>favicon.ico</div><div>index.html</div><div>manifest.json</div></div>";
  const srcDiv =
    "<div id='src-folder-files' style='margin-left: 20px;'><div>index.css</div><div>index.js</div></div>";
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
            <div id="public-folder" style={{ marginBottom: "16px" }}>
              <Dropdown
                as={CustomToggle(
                  "public-folder-files",
                  publicFolderOpen,
                  setPublicFolderOpen
                )}
              >
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

                <Dropdown.Menu
                  as={CustomMenu(
                    publicDiv,
                    "public-folder-files",
                    "public-folder",
                    publicFolderOpen
                  )}
                />
              </Dropdown>
            </div>
            <div id="src-folder" style={{ marginBottom: "16px" }}>
              <Dropdown
                as={CustomToggle(
                  "src-folder-files",
                  srcFolderOpen,
                  setSrcFolderOpen
                )}
              >
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

                <Dropdown.Menu
                  as={CustomMenu(
                    srcDiv,
                    "src-folder-files",
                    "src-folder",
                    srcFolderOpen
                  )}
                />
              </Dropdown>
            </div>
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
