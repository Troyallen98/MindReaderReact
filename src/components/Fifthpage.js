import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Fifthpage(props) {


    return (
        <Card style={{ width: '30rem', height: '45rem', display: 'flex', justifyContent: 'center' }} className='text-center'>
            <Card.Body className='d-flex flex-column' id='card-body-5'>
                <Card.Title className='mb-5' id='card_title-5'><h1>Find your number!</h1></Card.Title>
                <Card.Text id='randomsym' className="mt-auto">
                    <h1>{props.allSymbols}</h1>
                </Card.Text>
                <Link to='/answer' id='btn' style={{ width: '8rem' }} className='btn btn-lg btn-primary'>Next</Link>
                <Card.Text id='card-text-5'>
                    Find your new number, and note the symbol next to the number.
                </Card.Text>
                <Link id='card-button-5' to='/' style={{ width: '8rem' }}
                    className='btn btn-primary mt-auto ml-auto'
                    variant="primary">
                    Reset
                </Link>
            </Card.Body>
        </Card>
    )
}
