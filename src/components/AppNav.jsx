import { Navbar, Nav } from 'react-bootstrap'

export default function AppNav() {
  return(
    <Navbar className="navbar>">
      <Navbar.Brand className="brand" >App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="link" href=" #/ms/logout">Logout</Nav.Link>
      </Nav>
    </Navbar>
  )
}