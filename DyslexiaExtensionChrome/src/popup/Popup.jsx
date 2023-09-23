import { useState } from 'react'
import './Popup.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  const [crx, setCrx] = useState('create-chrome-ext')

  return (
    <main>
      <h3>Popup Page!</h3>

      <h6>v 0.0.0</h6>

      <Button variant="dark">hehehe</Button>
    </main>
  )
}

export default App
