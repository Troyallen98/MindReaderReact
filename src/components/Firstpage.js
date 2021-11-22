import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
export default function Firstpage() {
    return (
        <Card style={{ width: '30rem', height: '45rem', display: 'flex', justifyContent: 'center' }} className='text-center'>
            <Card.Body className='d-flex flex-column'>
                <Card.Title id='title-1'><h1>I can read you mind</h1></Card.Title>
                <Link id='btn-1' to='/secondpage'
                    style={{ width: '8rem' }}
                    className=' btn btn-primary mt-auto btn-lg ml-auto'
                >

                    Go
                </Link>
            </Card.Body>
        </Card>
    )
}
