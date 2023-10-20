import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListGroup, Col, Row } from 'react-bootstrap';
import { deleteFromWishlist } from '../Redux/Slices/wishListSlice';
import { addToCart } from '../Redux/Slices/cartSlice';

function WishList() {
    const wishlist = useSelector((state) => state.wishlistReducer)
    console.log(wishlist);
    const dispatch = useDispatch()
    const handleWishlistCart = (product) => {
        dispatch(addToCart(product));
        dispatch(deleteFromWishlist(product.id))
    }
    return (
        <div className='container mt-3 mb-5'>
        <ListGroup>
            {
                wishlist.length > 0 ?
                wishlist.map((product, index) => (
                    <ListGroup.Item>
                        <Row>
                            <Col className='col-auto'><img src={product.thumbnail} alt="" className='img-fluid rounded-1' style={{width: '200px'}} /></Col>
                            <Col>{product.title} <br /><span style={{fontSize:'small'}}>{product.description}</span><br /><h5>${product.price}</h5></Col>
                            <Col className='col-auto d-flex justify-content-center align-items-center bg-danger text-light rounded-2' onClick={() => dispatch(deleteFromWishlist(product.id))}><i class="fa-regular fa-trash-can"></i></Col>
                            <Col className='col-auto d-flex justify-content-center align-items-center bg-primary text-light rounded-2 ms-2' onClick={() => handleWishlistCart(product)}><i class="fa-regular fa-add"></i></Col>
                        </Row>
                    </ListGroup.Item>
                )) :
                <div className='container d-flex flex-column justify-content-center align-items-center mt-4 mb-4'>
                    <i class="fa-solid fa-cart-shopping m-2" style={{fontSize:'5rem'}}></i>
                    <p className='fs-3'>Your wishlist is empty</p>
                </div>
            }
        </ListGroup>
        </div>
    )
}

export default WishList