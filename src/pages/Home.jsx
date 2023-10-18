import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'

function Home() {
    const data = useFetch("https://dummyjson.com/products")
    console.log(data);
    return (
        <div className='container-fluid'>
            <Row>
                <Col sm={12} md={6} lg={4} xl={3} className='m-3'>
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body className='p-2'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Button variant="primary"><i class="fa-solid fa-heart"></i> Wishlist</Button>
                                <Button variant="primary"><i class="fa-solid fa-cart-shopping"></i> Cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home