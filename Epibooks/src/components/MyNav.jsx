import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid={true}>
          <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          </Container>
       </Navbar>
    </>
    );
};

export default MyNav