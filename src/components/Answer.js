import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"
// import Fifthpage from './Fifthpage.js';
export default function Answer(props) {
    return (
        <Card style={{ width: '30rem', height: '45rem', display: 'flex', justifyContent: 'center' }} className='text-center'>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='mt-4' id='card_title'><h1>{props.viewerIcon}</h1></Card.Title>
                <Card.Text id='card-text-asw'>
                    Your answer is: {props.viewerIcon}
                </Card.Text>
                <Link to='/' id='card-button'
                    style={{ width: '8rem' }}
                    className='btn btn-primary ml-auto'
                    variant="primary">
                    Reset
                </Link>
            </Card.Body>
        </Card>
    )
}
