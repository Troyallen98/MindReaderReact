import {Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstpage from './Firstpage.js'
import Secondpage from './Secondpage.js'
import Thirdpage from './Thirdpage.js'
import Forthpage from './Forthpage.js'
function App() {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }} className="App">
     <Forthpage />
    </Container>
  );
}

export default App;
