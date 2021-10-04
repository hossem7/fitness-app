import React from 'react';
import './Shop.scss';
import image from '../../Assets/Place Holder 5.png';
import clientImg from '../../Assets/Place Holder 6.png';
import carousel from '../../Assets/Place Holder 7.png';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"


const Shop = () => {
    return (
        <div className="shop" id="Shop">
            <div className="featured">
                <h1>Featured Products</h1>
                <ul>
                    <li id="product1">
                        <img src={image} alt="logo" />
                        <h2>Product Title</h2>
                        <p>text text text text text text text text text </p>
                        <p>$0.00</p>
                        <button>SHOP NOW</button>
                    </li>
                    <li className="product2">
                        <img src={image} alt="logo" />
                        <h2>Product Title</h2>
                        <p>text text text text text text text text text</p>
                        <p>$0.00</p>
                        <button>SHOP NOW</button>
                    </li>
                    <li className="product2">
                        <img src={image} alt="logo" />
                        <h2>Product Title</h2>
                        <p>text text text text text text text text text</p>
                        <p>$0.00</p>
                        <button>SHOP NOW</button>
                    </li>
                </ul>
            </div>

            <div className="success-story">
                <h1>Client Success Story</h1>
                <div className="client-div">
                    <div className="client-description">
                        <h1>Client Name</h1>
                        <h3>Program | Weight Lost</h3>
                        <h3>text text text text text text text text text text text text text text text text text text text text text text text text text texttext text text text text text text text text text texttexttext</h3>
                        <button>BOOK CONSULTATION</button>
                    </div>
                    <div className="client-image">
                        <img src={clientImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="image-carousel">
                <FiChevronLeft size='4rem'/>
                <ul>
                    <li><img src={carousel} alt="logo"/></li>
                    <li><img src={carousel} alt="logo"/></li>
                    <li><img src={carousel} alt="logo"/></li>
                </ul>
                <FiChevronRight size="4rem"/>
            </div>
            <div className="image-carousel-small">
                <Carousel>
                    <div>
                        <img src={carousel} alt="logo"/>
                    </div>
                    <div>
                        <img src={carousel} alt="logo"/>
                    </div>
                    <div>
                        <img src={carousel} alt="logo"/>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Shop;
