import { Container, Navbar } from "react-bootstrap";

const MyFooter = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Epibooks 2025</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Created by : <a href="#">Walter Antonelli</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MyFooter