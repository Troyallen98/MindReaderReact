import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Firstpage() {
    return (
        <Card style={{ width: '30rem', height: '45rem', display: 'flex', justifyContent: 'center' }} className='text-center'>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='mt-4'id='card_title'><h1>Pick a number 1-99</h1></Card.Title>
                <Button id='btn'style={{ width: '8rem' }} className='btn-lg'>Next</Button>
                <Card.Text>
                    When you have picked a number click 'Next'
                </Card.Text>
                <Button 
                    id='card-button' 
                    style={{ width: '8rem' }} 
                    className='mt-auto ml-auto' 
                    variant="primary">
                        Reset
                </Button>
            </Card.Body>
        </Card>
    )
}
