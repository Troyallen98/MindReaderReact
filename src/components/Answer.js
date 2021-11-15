import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Fifthpage from './Fifthpage.js';
export default function Answer(props) {
    return (
         <Card style={{ width: '30rem', height: '45rem', display: 'flex', justifyContent: 'center' }} className='text-center'>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='mt-4'id='card_title'><h1> </h1></Card.Title>
                <Card.Text>
                    Your answer is: {props.viewericon}
                </Card.Text>
                <Link to='/'>
                    <Button 
                        id='btn-4' 
                        style={{ width: '8rem' }} 
                        className='ml-auto' 
                        variant="primary">
                            Reset
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
