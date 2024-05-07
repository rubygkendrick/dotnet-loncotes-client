import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar color="info" expand="md">
        <Container>
          <Row>
            <Col>
              <NavbarBrand href="/">📖 Loncotes County Library</NavbarBrand>
            </Col>
            <Col>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/materials">Materials</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/patrons">Patrons</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/checkouts">Checkouts</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
