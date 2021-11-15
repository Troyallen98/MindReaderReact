import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Fifthpage() {
    let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "+"];
    let yourSymbol = null;
    function randomSymbol() {
        
        let icon = characters[Math.floor(Math.random() * characters.length)];
        let string = "";
        for (let i = 0; i <= 99; i++) {
            if (i % 9 === 0) {
                string = string + i + " - " + icon + "\n";
            }
            else {
                let random = characters[Math.floor(Math.random() * characters.length)];
                string = string + i + " - " + random + "\n";
                yourSymbol = icon
            };
        };
        return string;
    };
    return (
        <Card style={{ width: '30rem', height: '45rem', display: 'flex', justifyContent: 'center' }} className='text-center'>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='mt-5' id='card_title'><h1>Find your number!</h1></Card.Title>
                <Card.Text id='randomsym'className="mt-auto">
                <h1>{randomSymbol()}</h1>
                </Card.Text>
                <Link to='/answer'>
                <Button id='btn' style={{ width: '8rem' }} className='btn-lg'>Next</Button>
                </Link>
                <Card.Text>
                    Find your new number, and note the symbol next to the number.
                </Card.Text>
                <Link to='/'>
                <Button
                    id='card-button-5'
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
