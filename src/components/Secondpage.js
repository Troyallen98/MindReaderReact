import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
export default function Firstpage() {
    return (
        
        <Card style={{ width: '30rem', height: '45rem', display: 'flex', justifyContent: 'center' }} className='text-center'>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='mt-4'id='card_title'><h1>Pick a number 1-99</h1></Card.Title>
                <Link className='btn btn-lg btn-primary' style={{ width: '8rem' }} id='btn-2' to='/thirdpage'>Next</Link>
                <Card.Text id='card-text-1'>
                    When you have picked a number click 'Next'
                </Card.Text>
                <Link className='mt-5 mt-auto ml-auto btn btn-primary' id='card-button' to='/'
                    style={{ width: '8rem' }} 
                >
                        Reset
                </Link>
            </Card.Body>
        </Card>
    )
}
