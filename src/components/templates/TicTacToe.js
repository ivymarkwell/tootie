import React, { useState, useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { getParameters } from "codesandbox/lib/api/define";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-json";
import "prism-themes/themes/prism-vs.css";
import "../../App.css";
import {
  faviconIco,
  gitignore,
  indexCss,
  indexHTML,
  indexJs,
  manifestJSON,
  packageJSON,
  packageLockJSON,
  readme,
} from "../../files.js";

function TicTacToe() {
  const [code, setCode] = useState(indexJs);
  const [language, setLanguage] = useState(languages.js);
  const [publicFolderOpen, setPublicFolderOpen] = useState(false);
  const [srcFolderOpen, setSrcFolderOpen] = useState(true);

  // state of css, html and javascript code files
  const [css, setCss] = useState(indexCss);
  const [html, setHtml] = useState(indexHTML);
  const [javascript, setJavascript] = useState(indexJs);
  const [sandboxId, setSandboxId] = useState(null);

  // generate codesandbox from state
  const parameters = getParameters({
    files: {
      "index.css": {
        content: css,
      },
      "index.html": {
        content: html,
      },
      "index.js": {
        content: javascript,
      },
      "package.json": {
        content: packageJSON,
      },
    },
  });

  const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&json=1`;
  const sandboxUrl = `https://codesandbox.io/embed/${sandboxId}?hidedevtools=1&hidenavigation=1&view=preview`;

  const generateUrl = () => {
    // GET request using fetch with error handling
    fetch(url)
      .then(async (response) => {
        const data = await response.json();
        setSandboxId(data.sandbox_id);

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    !sandboxId && generateUrl();
  });

  return (
    <>
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
                    onClick={() => {
                      setCode(faviconIco);
                      setLanguage("");
                    }}
                    style={{
                      all: "unset",
                      display: "flex",
                      marginBottom: "16px",
                    }}
                  >
                    favicon.ico
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={() => {
                      setCode(indexHTML);
                      setLanguage(languages.html);
                    }}
                    style={{
                      all: "unset",
                      display: "flex",
                      marginBottom: "16px",
                    }}
                  >
                    index.html
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={() => {
                      setCode(manifestJSON);
                      setLanguage(languages.json);
                    }}
                    style={{
                      all: "unset",
                      display: "flex",
                      marginBottom: "16px",
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
                      marginBottom: "16px",
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
                      marginBottom: "16px",
                    }}
                  >
                    index.js
                  </ListGroup.Item>
                </div>
              )}
            </ListGroup>
            <Card.Text
              action
              onClick={() => {
                setCode(gitignore);
                setLanguage(languages.markup);
              }}
            >
              .gitignore
            </Card.Text>
            <Card.Text
              action
              onClick={() => {
                setCode(readme);
                setLanguage(languages.markup);
              }}
            >
              README.md
            </Card.Text>
            <Card.Text
              action
              onClick={() => {
                setCode(packageLockJSON);
                setLanguage("");
              }}
            >
              package-lock.json
            </Card.Text>
            <Card.Text
              action
              onClick={() => {
                setCode(packageJSON);
                setLanguage(languages.json);
              }}
            >
              package.json
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="code-editor">
          <Card.Body style={{ paddingBottom: 0 }}>
            <Card.Title>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Code</span>
                <Button
                  onClick={() => {
                    generateUrl();
                  }}
                >
                  Run the code!
                </Button>
              </div>
            </Card.Title>
            <Card.Text
              style={{ height: "calc(87vh - 160px)", overflowY: "scroll" }}
            >
              <Editor
                value={code}
                onValueChange={(code) => {
                  if (language === languages.css) {
                    setCss(code);
                  }
                  if (language === language.html) {
                    setHtml(code);
                  }
                  if (language === languages.js) {
                    setJavascript(code);
                  }
                  setCode(code);
                }}
                highlight={(code) => highlight(code, language)}
                padding={10}
                style={{
                  backgroundColor: "white",
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 12,
                }}
              />
            </Card.Text>
          </Card.Body>
        </Card>
        {!sandboxId ? (
          <div
            class="d-flex justify-content-center text-light"
            style={{ alignItems: "center", height: "100%", width: "40%" }}
          >
            <div class="spinner-border" role="status" />
          </div>
        ) : (
          <iframe
            src={sandboxUrl}
            style={{ height: "100%", width: "40%", overflow: "hidden" }}
            title="Our code!"
          ></iframe>
        )}
      </div>
    </>
  );
}

export default TicTacToe;
