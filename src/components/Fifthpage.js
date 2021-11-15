import React from 'react'
import { Card, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Fifthpage() {
    let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "+"];
    let viewerIcon = null;

    function randomSymbol() {
        
        let icon = characters[Math.floor(Math.random() * characters.length)];
        let selection = "";
        for (let i = 0; i <= 99; i++) {
            if (i % 9 === 0) {
                selection = selection + i + " - " + icon + "\n";
            }
            else {
                let random = characters[Math.floor(Math.random() * characters.length)];
                selection = selection + i + " - " + random + "\n";
                viewerIcon = icon
            };
        };
        return selection;
        
    };

    return (
        <Card style={{ width: '30rem', height: '45rem', display: 'flex', justifyContent: 'center' }} className='text-center'>
            <Card.Body className='d-flex flex-column' id='card-body-5'>
                <Card.Title className='mb-5' id='card_title-5'><h1>Find your number!</h1></Card.Title>
                <Card.Text id='randomsym'className="mt-auto">
                <h1>{randomSymbol()}</h1>
                </Card.Text>
                <Link to='/answer'>
                <Button id='btn' style={{ width: '8rem' }} className='btn-lg'>Next</Button>
                </Link>
                <Card.Text id='card-text-5'>
                    Find your new number, and note the symbol next to the number. 
                </Card.Text>
                <Link id='card-button-5' to='/'>
                <Button
                    
                    style={{ width: '8rem' }}
                    className='mt-auto ml-auto'
                    variant="primary">
                    Reset
                </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
