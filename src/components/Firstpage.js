import React from 'react'
import { Card, Button} from 'react-bootstrap'

export default function Firstpage() {
    return (
        <Card style={{ width: '30rem', height: '45rem', display: 'flex', justifyContent: 'center'  }} className='text-center'>
            <Card.Body className='d-flex flex-column'>
                <Card.Title><h1>I can read you mind</h1></Card.Title>
                <Button id='card-button'
                        style={{width:'8rem'}} 
                        className='mt-auto btn-lg ml-auto' 
                        variant="primary">
                            Go
                </Button>
            </Card.Body>
        </Card>
    )
}
