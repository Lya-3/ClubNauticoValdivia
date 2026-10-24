import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Club Nautico Valdivia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/muelle">Muelle</Nav.Link>
                        <Nav.Link href="/">Almacenes</Nav.Link>
                        <Nav.Link href="/">Servicios</Nav.Link>
                        <Nav.Link href="/">Socios</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;