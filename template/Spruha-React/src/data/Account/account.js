import { Row, Col, Tab, Nav } from 'react-bootstrap';
export function Example() {
  return (

    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item><Nav.Item>
              <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
            </Nav.Item><Nav.Item>
              <Nav.Link eventKey="fivth">Tab 5</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h1>first</h1>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h1>second</h1>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <h1>snd</h1>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <h1>secd</h1>
            </Tab.Pane>
            <Tab.Pane eventKey="fivth">
              <h1>cond</h1>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}