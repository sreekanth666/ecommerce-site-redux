import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'

function Home() {
    const data = useFetch("https://dummyjson.com/products")
    console.log(data);
    return (
        <div className='container-fluid'>
            <Row>
                {
                    data?.length > 0 ? data?.map((product, index) => (
                        <Col className='mt-4' sm={12} md={6} lg={4} xl={3}>
                            <Card style={{ width: '18rem'}}>
                                <Card.Img height="200px" variant="top" src={product.thumbnail} />
                                <Card.Body className='p-2'>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text style={{fontSize:"small"}}>
                                    {product.description.slice(0,60)}...
                                    </Card.Text>
                                    <Card.Text style={{fontSize:"small"}}>
                                    <h5>${product.price}</h5>
                                    </Card.Text>
                                    <div className='d-flex justify-content-between'>
                                        <Button variant="primary"><i class="fa-solid fa-heart"></i> Wishlist</Button>
                                        <Button variant="primary"><i class="fa-solid fa-cart-shopping"></i> Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                        : 
                        <p className='text-center m-4'>Nothing to display</p>
                }
            </Row>
        </div>
    )
}

export default Home