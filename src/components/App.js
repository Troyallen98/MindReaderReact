import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'

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
    let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "+"];
    const [viewerIcon, setViewerIcon] = useState(null)
    // let viewerIcon = null;

    function randomSymbol() {

        let icon = characters[Math.floor(Math.random() * characters.length)];
        setViewerIcon(icon)

        let selection = "";
        for (let i = 0; i <= 99; i++) {
            if (i % 9 === 0) {
                selection = selection + i + " - " + icon + "\n";
            }
            else {
                let random = characters[Math.floor(Math.random() * characters.length)];
                selection = selection + i + " - " + random + "\n";
                // viewerIcon = icon
            };
        };
        return selection;

    };
    const [allSymbols, setAllSymbols] = useState(null)

    useEffect(() => {
        setAllSymbols(randomSymbol())
    }, [])




    return (
        <Container style={{ display: 'flex', justifyContent: 'center' }} className="App">
            <BrowserRouter >
                <Routes>
                    <Route path="/">
                        <Route index element={<Firstpage />} />
                        <Route path='/secondpage' element={<Secondpage />} />
                        <Route path='/thirdpage' element={<Thirdpage />} />
                        <Route path='/forthpage' element={<Forthpage />} />
                        <Route path='/fifthpage' element={<Fifthpage allSymbols={allSymbols} />} />
                        <Route path='/answer' element={<Answer viewerIcon={viewerIcon} />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </Container>

    )
}

export default App;
