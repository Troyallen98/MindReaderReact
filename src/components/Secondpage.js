import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
export default function Firstpage() {
    return (
        
        <Card style={{ width: '30rem', height: '45rem', display: 'flex', justifyContent: 'center' }} className='text-center'>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='mt-4'id='card_title'><h1>Pick a number 1-99</h1></Card.Title>
                <Link id='linkmarg' to='/thirdpage'><Button id='btn'style={{ width: '8rem' }} className='btn-lg'>Next</Button></Link>
                <Card.Text id='card-text-2'>
                    When you have picked a number click 'Next'
                </Card.Text>
                <Link className='mt-5' id='card-button' to='/'>
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
