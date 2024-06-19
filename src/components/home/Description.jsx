import React, { useState } from 'react'
import Navbar from '../../pages/Navbar'
import './Description.css'
import product_01 from "../../assets/product_01.jpeg"
import product_01_100x100 from "../../assets/product_01_100x100.jpeg"
import product_01_100x101 from "../../assets/product_01_100x101.jpeg"
import product_01_group from "../../assets/product_01_group.jpeg"
import { RxStar } from 'react-icons/rx'
import { AiFillStar } from 'react-icons/ai'
import { LuCircleDot } from 'react-icons/lu'
import { GrSearch } from 'react-icons/gr'
import Related from './Related'
import Footer from '../Footer'




const Description = () => {
  const [count, setCount] = useState(0)
  const [review, setReview] = useState(false)
  const [desc, setDesc] = useState(true)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function handleDesc() {
    setDesc(true)
    setReview(false)
  }
  function handleReview() {
    setReview(true)
    setDesc(false)
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='Product_description'>
        <div className='prod_img'>
          <div className='main_sub'>
            <img src={product_01} alt="" />
            <div className='search'>
              <GrSearch className='SB' />
            </div>
            <div className='abs'>
              <p>Sale!</p>
            </div>


          </div>
          <div className='sub_img'>
            <div className='sub'>
              <img src={product_01} alt="" />

            </div>
            <div className='sub'>
              <img src={product_01_100x100} alt="" />

            </div>
            <div className='sub'>
              <img src={product_01_100x101} alt="" />


            </div>
            <div className='sub'>
              <img src={product_01_group} alt="" />


            </div>

          </div>

        </div>
        <div className='prod_txt'>
          <div className='A_txt'>
            <a href="#">Home /</a>
            <a href="#">Hair Care /</a>
            <a href="#">Product Name 1</a>
            <div className='H_txt'>
              <span>Hair Care</span>
              <h1>Product Name 1</h1>
              <h3><del>$75.00</del> $59.00 & Free Shipping</h3>
              <p>
                Ut quis sollicitudin orci. Aliquam at libero non purus sodales sagittis eu ac neque. Nunc ipsum felis, vehicula eu aliquam sed, ultricies ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam viverra commodo finibus. Morbi laoreet lacus quis lobortis tempor. Nam tincidunt, lectus a suscipit fringilla, mauris turpis dapibus dolor, eu venenatis diam nibh id massa. <br /> <br />

                Nulla eget tortor ultrices, ultricies turpis a, accumsan turpis. Quisque dignissim semper leo ac accumsan. Quisque est nisl, bibendum ut elit quis, pellentesque vehicula tellus. Sed luctus mattis ante ac posuere.
              </p>
              <div className='count_div'>
                <div className='increment'>
                  <div className='increase' onClick={decrement}>-</div>
                  <div>{count}</div>
                  <div className='increase' onClick={increment}>+</div>
                </div>
                <div>
                  <button> ADD TO CART</button>
                </div>
              </div>

            </div>

          </div>
          <h4 className='last'>Category: <a href="#">Hair Care</a></h4>

        </div>

      </div>
      <div className='Review_part'>
        <div className='half_nav'>
          <div onClick={handleDesc}>Description </div>
          <div onClick={handleReview}>Reviews (0)</div>
        </div>

        {desc && (
          <div className='desc_part'>
            <h1>More about the product</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac massa eget urna tempor vehicula vel id nisi. <br /> Pellentesque sed felis auctor, molestie lectus vitae, elementum orci. In et nunc consequat, semper tellus eget, euismod <br /> quam.
            </p>
            <div className='cover'>
              <div className='cover_txt'>
                <h6>NUNC SED JUSTO</h6>
                <h2>
                  Cras vehicula semper ex, et fermentum tortor varius eget <br />
                  interdum et malesuada fames ac ante
                </h2>

              </div>

            </div>
          </div>
        )}
        {/* ........Forms part of the review.......... */}
        {review && (
          <div className='forms'>
            <h2>Be the first to review “Product Name 1”</h2>
            <h3>Your email address will not be published. Required fields are marked *</h3>

            <div className='gen'>
              <label className='lab'>Your rating*</label>
              <AiFillStar className='star_rate' />
              <AiFillStar className='star_rate' />
              <AiFillStar className='star_rate' />
              <AiFillStar className='star_rate' />
              <AiFillStar className='star_rate' />

            </div>

            <div className='text_review'>
              <p>Your review*</p>
              <textarea className='txt_ayra'></textarea>

            </div>
            <div className='combo'>
              <div className='n_txt'>
                <p>Name*</p>
                <input className='info' type='text'></input>
              </div>
              <div className='e_txt'>
                <p>Email*</p>
                <input className='info' type='text'></input>
              </div>

            </div>
            <div className='check'>
              <p> <input type="checkbox" name="" id="box" />
                Save my name, email, and website in this
                browser for the next time I comment.
              </p>

            </div>
            <button className='final'>SUBMIT</button>

          </div>
        )}

      </div>

      {/* ......Product's Features.......... */}
      <div className='Features'>
        <div className='sub_feat'>
          <h1>Product's Features</h1>

        </div>
        <div className='empty'>

        </div>
        <div className='Nunc'>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </h2>
          <ul>
            <li><LuCircleDot className='size' /> Nunc sed justo at nisi commodo varius</li>
            <li> <LuCircleDot className='size' /> Ut eu urna enim. Curabitur posuere fermentum</li>
            <li><LuCircleDot className='size' /> Curabitur at orci nec urna aliquet porta</li>
          </ul>
        </div>
      </div>
      {/* .......End of product's features...... */}
      {/* .........Flower head........ */}
      <div className='flora_gen'>
        <div className='flora_img'>
          <div className='flora_gen_txt'>
            <div className='H_lorem'>
              <p>LOREM IPSUM DOLOR</p>
              <h1>Nam bibendum augue pharetra ultrices.</h1>
            </div>
            <div className='MT'></div>
            <div className='B_lorem'>
              <p>Ut eu urna enim. Curabitur posuere fermentum libero, pretium dignissim est lacinia nec.
                 Aenean dapibus ante sed pharetra scelerisque.
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className='Relate'>
       <Related/>
      </div>
      <div className='end'>
        <Footer/>

      </div>
  
    </>

  )
}
export default Description