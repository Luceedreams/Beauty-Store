import React from 'react'
import './Choices.css'
import { FaShippingFast } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiLeftArrowAlt } from 'react-icons/bi'


const Choice = () => {
  return (
    <>
      <div className='parent_choice'>
        <div className='YQ'>
          <span>WHY CHOOSE US</span>
          <div className='Yqdash'></div>

        </div>
        <div className='divide'>

          <div className='Delivery'>
            <div className='gone'>
              <div className='for_truck'>
                <FaShippingFast className='truck' />
              </div>
              <h1>Fast Delivery</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>

          <div className='Delivery'>
            <div className='gone'>
              <div className='for_truck'>
                <AiOutlineShoppingCart className='truck' />
              </div>
              <h1>Free Shipping</h1>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
          <div className='Delivery'>
            <div className='gone'>
              <div className='for_truck'>
                <BiLeftArrowAlt className='truck' />
              </div>
              <h1>Easy Returns</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
        </div>


      </div>

    </>
  )
}

export default Choice