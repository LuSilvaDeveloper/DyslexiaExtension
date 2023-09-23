import { useState } from 'react'
import './Popup.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

function App() {
  const [crx, setCrx] = useState('create-chrome-ext')

  return (
    <main>
      <h3>Popup Page!</h3>

      <h6>v 0.0.0</h6>
      <Container className="mt-5">
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Customize Font"
        />
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Stop Animations"
        />
      </Form>
    </Container>
    </main>
  )
}

export default App
