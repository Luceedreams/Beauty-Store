import React from 'react'
import './Popular.css'
import product_01 from "../../assets/product_01.jpeg"
import product_02 from "../../assets/product_02.jpeg"
import product_03 from "../../assets/product_03.jpeg"
import product_04 from "../../assets/product_04.jpeg"
import { RiStarSLine } from 'react-icons/ri'
import { GiShoppingBag } from "react-icons/gi";
import { Link } from 'react-router-dom'

const Popular = () => {
    return (
        <>
            <div className='Title_container'>
                <h4>Popular Products</h4>
                <h2>Trending Now</h2>

            </div>
            <div className='Products'>
                <div className='pdf'>
                    <Link to="/product/description">
                        <div className='Products_img'>
                            <button>Sale!</button>
                            <GiShoppingBag className='product_cart' />
                            <img src={product_01} alt="" />
                        </div>
                    </Link>
                    <>
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                    </>
                    <h2>Product Name 1</h2>
                    <p><del>$75.00</del> $59.00</p>
                </div>
                <div>
                    <Link to="/product/description">
                    <div className='Products_img'>
                        <button>Sale!</button>
                        <GiShoppingBag className='product_cart' />
                        <img src={product_02} alt="" />

                    </div>
                    </Link>
                    <>
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                    </>
                    <h2>Product Name 10</h2>
                    <p><del>$75.00</del> $59.00</p>
                </div>
                <div>
                    <Link to="/product/description">
                    <div className='Products_img'>
                        <button>Sale!</button>
                        <GiShoppingBag className='product_cart' />
                        <img src={product_03} alt="" />

                    </div>
                    
                    </Link>
                    <>
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                    </>
                    <h2>Product Name 11</h2>
                    <p><del>$75.00</del> $59.00</p>
                </div>
                <div>
                    <Link to="/product/description">
                    <div className='Products_img'>
                        <button>Sale!</button>
                        <GiShoppingBag className='product_cart' />
                        <img src={product_04} alt="" />

                    </div>
                    
                    </Link>
                    <>
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                        <RiStarSLine className='stars' />
                    </>
                    <h2>Product Name 12</h2>
                    <p><del>$75.00</del> $59.00</p>
                </div>
            </div>
        </>
    )
}

export default Popular