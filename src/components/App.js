import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstpage from './Firstpage.js'
import Secondpage from './Secondpage.js'
import Thirdpage from './Thirdpage.js'
import Forthpage from './Forthpage.js'
import Fifthpage from './Fifthpage.js'
import Answer from './Answer.js'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
function App() {
    return (
        <Container style={{ display: 'flex', justifyContent: 'center' }} className="App">
        <BrowserRouter >
            <Routes>
                <Route path="/">
                   <Route path="/" element={<Firstpage />} />
                    <Route path='/secondpage' element={<Secondpage />}/>
                    <Route path='/thirdpage' element={<Thirdpage />}/>
                    <Route path='/forthpage' element={<Forthpage />}/>
                    <Route path='/fifthpage' element={<Fifthpage />}/>
                    <Route path='/answer' element={<Answer />}/>
                </Route>
            </Routes>
        </BrowserRouter>
         
        </Container>
    
  )
}

export default App;
