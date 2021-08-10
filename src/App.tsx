import React from "react";
import { InputPaste } from "./components/InputPaste";
import { ListOfPastes } from "./components/ListOfPastes";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      
      <Container className="justify-content-center mt-8">
        <Row className="justify-content-center">
          <Col xs lg="auto">
            <h3>Paste</h3>
            <InputPaste />
          </Col>
          <Col lg="auto">
            <h3>Paste History</h3>
            <ListOfPastes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
