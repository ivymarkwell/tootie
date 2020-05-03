import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";

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
            <Card.Title>Sidebar</Card.Title>
            <Card.Text>Sidebar stuff</Card.Text>
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
