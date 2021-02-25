import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function App() {
  const [state, setState] = useState({isLoggedIn: false})
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://api.memberstack.io/static/memberstack.js?custom";
    script.setAttribute('data-memberstack-id', '437974800f22566d2a57ac00bdc867ef');
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="brand" >App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="link" href="#/ms/signup/60381a660dd8ef0004dd0f58">Signup</Nav.Link>
        <Nav.Link className="link" href="#/ms/login">Login</Nav.Link>
      </Nav>
    </Navbar>
    </div>
  );
}

export default App;
