import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prism-themes/themes/prism-vs.css";
import "../../App.css";
import { gitignore, indexCss, indexJs } from "../../files.js";

function TicTacToe() {
  const [publicFolderOpen, setPublicFolderOpen] = useState(false);
  const [srcFolderOpen, setSrcFolderOpen] = useState(true);
  const [code, setCode] = useState(indexJs);
  const [language, setLanguage] = useState(languages.js);

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
                style={{ all: "unset", display: "flex", marginBottom: "16px" }}
              >
                public <div className="arrow-down" />
              </ListGroup.Item>
              {publicFolderOpen && (
                <div style={{ marginLeft: "20px" }}>
                  <ListGroup.Item
                    action
                    style={{
                      all: "unset",
                      display: "flex",
                      marginBottom: "16px"
                    }}
                  >
                    favicon.ico
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    style={{
                      all: "unset",
                      display: "flex",
                      marginBottom: "16px"
                    }}
                  >
                    index.html
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    style={{
                      all: "unset",
                      display: "flex",
                      marginBottom: "16px"
                    }}
                  >
                    manifest.json
                  </ListGroup.Item>
                </div>
              )}
            </ListGroup>
            <ListGroup>
              <ListGroup.Item
                action
                onClick={() => setSrcFolderOpen(!srcFolderOpen)}
                style={{ all: "unset", display: "flex", marginBottom: "16px" }}
              >
                src <div className="arrow-down" />
              </ListGroup.Item>
              {srcFolderOpen && (
                <div style={{ marginLeft: "20px" }}>
                  <ListGroup.Item
                    action
                    onClick={() => {
                      setCode(indexCss);
                      setLanguage(languages.css);
                    }}
                    style={{
                      all: "unset",
                      display: "flex",
                      marginBottom: "16px"
                    }}
                  >
                    index.css
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={() => {
                      setCode(indexJs);
                      setLanguage(languages.js);
                    }}
                    style={{
                      all: "unset",
                      display: "flex",
                      marginBottom: "16px"
                    }}
                  >
                    index.js
                  </ListGroup.Item>
                </div>
              )}
            </ListGroup>
            <Card.Text onClick={() => setCode(gitignore)}>.gitignore</Card.Text>
            <Card.Text>README.md</Card.Text>
            <Card.Text>package-lock.json</Card.Text>
            <Card.Text>package.json</Card.Text>
          </Card.Body>
        </Card>
        <Card className="code-editor">
          <Card.Body>
            <Card.Title>Code</Card.Title>
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => highlight(code, language)}
              padding={10}
              style={{
                backgroundColor: "white",
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                minHeight: "95%"
              }}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TicTacToe;
