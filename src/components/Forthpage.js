import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
export default function Firstpage() {
    return (
        <Card style={{ width: '30rem', height: '45rem', display: 'flex', justifyContent: 'center' }} className='text-center'>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='mt-4' id='card_title'><h1>subtract your new number from the original</h1></Card.Title>
                <Link id='btn-2' to='/fifthpage' style={{ width: '8rem' }} className='btn btn-lg btn-primary'>Next</Link>
                <Card.Text id='card-text-4'>
                    Ex: 14-5=9 click 'Next' to proceed
                </Card.Text>
                <Link to='/' 
                    id='card-button'
                    style={{ width: '8rem' }}
                    className='btn btn-primary ml-auto'
                >

                    Reset

                </Link>
            </Card.Body>
        </Card>
    )
}

