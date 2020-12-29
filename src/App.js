import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigation from "./components/layout/navigation/navigation";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Navigation></Navigation>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
