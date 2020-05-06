import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import "../../App.css";

function TicTacToe() {
  const [publicFolderOpen, setPublicFolderOpen] = useState(false);
  const [srcFolderOpen, setSrcFolderOpen] = useState(false);

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
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item
                action
                onClick={() => setPublicFolderOpen(!publicFolderOpen)}
                style={{ all: "unset", display: "flex" }}
              >
                public <div className="arrow-down" />
              </ListGroup.Item>
              {publicFolderOpen && (
                <>
                  <ListGroup.Item
                    action
                    style={{ all: "unset", display: "flex" }}
                  >
                    favicon.ico
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    style={{ all: "unset", display: "flex" }}
                  >
                    index.html
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    style={{ all: "unset", display: "flex" }}
                  >
                    manifest.json
                  </ListGroup.Item>
                </>
              )}
            </ListGroup>
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item
                action
                onClick={() => setSrcFolderOpen(!srcFolderOpen)}
                style={{ all: "unset", display: "flex" }}
              >
                src <div className="arrow-down" />
              </ListGroup.Item>
              {srcFolderOpen && (
                <>
                  <ListGroup.Item
                    action
                    style={{ all: "unset", display: "flex" }}
                  >
                    index.css
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    style={{ all: "unset", display: "flex" }}
                  >
                    index.js
                  </ListGroup.Item>
                </>
              )}
            </ListGroup>
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
