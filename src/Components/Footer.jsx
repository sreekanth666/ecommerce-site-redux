import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <Container>
            <div className="footer w-100">
                <div className="footer-content d-flex justify-content-evenly">
                    <div className="website m-3" style={{width: '300px'}}>
                        <h3><i class="fa-brands fa-opencart"></i> eKart</h3>
                        <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
                        <p>Currently v1.0.0</p>
                        </div>
                    <div className="links m-3 d-flex flex-column">
                        <h5>Links</h5>
                        <Link to={'/'} style={{textDecoration:'none', color:'black'}}>Home</Link>
                        <Link to={'/cart'} style={{textDecoration:'none', color:'black'}}>Cart</Link>
                        <Link to={'/wishlist'} style={{textDecoration:'none', color:'black'}}>Wishlist</Link>
                    </div>
                    <div className="guides m-3 d-flex flex-column">
                        <h5>Guides</h5>
                        <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'black'}}>React JS</Link>
                        <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'black'}}>React Bootstrap</Link>
                        <Link to={'https://www.npmjs.com/package/react-router-dom'} style={{textDecoration:'none', color:'black'}}>Routing</Link>
                    </div>
                </div>
                <p className='text-center'>Copyright © 2023 eKart.</p>
            </div>
        </Container>
    )
}

export default Footer