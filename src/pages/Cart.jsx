import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { removeFromCart } from '../Redux/Slices/cartSlice'

function Cart() {
    const cart = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()
    const [total, setTotal] = useState()
    const getCartTotal = () => {
        if (cart.length > 0) {
            setTotal(cart.map((item) => item.price).reduce((p1, p2) => p1+p2))
        }
    }
    useEffect(() => {
        getCartTotal()
    }, [cart])
    return (
        <div className='container mt-3 mb-5'>
            {
                cart.length > 0 ? 

                <Row>
                    <Col>
                        <table className='table'>
                                        <thead>
                                            <tr className='text-center'>
                                                <th>#</th>
                                                <th>Details</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                        {
                            
                            cart.map((product, index) => (
                                    
                                        <tbody>
                                            <tr>
                                                <td>{index+1}</td>
                                                <td className='w-50'>
                                                    <Row>
                                                        <Col className='col-auto'><img src={product.thumbnail} alt="" className='img-fluid' style={{width:'100px', height:"100px"}}/></Col>
                                                        <Col>
                                                            {product.title} <br />
                                                            <span style={{fontSize:'small'}}>{product.description}</span><br />
                                                            <h5 className='mb-0'>${product.price}</h5> <br />
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td><button className='btn btn-danger w-50 mx-auto d-block' onClick={() => dispatch(removeFromCart(product.id))}>Remove</button> <br /> <button className='mx-auto d-block btn btn-primary w-50'>Buy Now</button></td>
                                            </tr>
                                        </tbody>
                                    
                            ))
                        }
                        </table>
                    </Col>
                    <Col className='col-auto'>
                        <h3>Cart summary</h3>
                        <p className='m-0 mt-3'>Total products: <span>{cart.length}</span></p>
                        <p className='m-0'>Total: $<span>{total}</span></p>
                        <button className='btn btn-primary mt-3 w-100'>Check Out</button>
                    </Col>
                </Row> :
                    <div className='container d-flex flex-column justify-content-center align-items-center mt-4 mb-4'>
                        <i class="fa-solid fa-cart-shopping m-2" style={{fontSize:'5rem'}}></i>
                        <p className='fs-3'>Your cart is empty</p>
                    </div>
            }
            
        </div>
    )
}

export default Cart