import React from 'react'
import './Footer.css'
import Logo from "../assets/logo-regular.png";
import { SlSocialFacebook } from 'react-icons/sl'
import { TiSocialTwitter } from 'react-icons/ti'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
const Footer = () => {
    return (
        <>
            <div className='main'>
                <div className='first'>
                    <div className='sub'>
                        <h2>Subscribe to our newsletter</h2>
                    </div>
                    <div className='sub_2'>
                        <input className='email_box' type="text" placeholder='  Your email address...' />

                        <button>SUBSCRIBE</button>

                    </div>
                </div>
                <div className='mid'>
                    <div className='logo_box'>
                        <div className='logs'>
                            <img src={Logo} alt="" />

                        </div>

                    </div>
                    <div className='list_1'>
                        <p>Shop All</p>
                        <p>Makeup</p>
                        <p>Skin Care</p>
                        <p>Hair Care</p>
                        <p>About</p>
                        <p>Contact</p>

                    </div>
                    <div className='list_2'>
                        <p>Refund Policy</p>
                        <p>Terms & Conditions</p>
                        <p>FAQ</p>
                        <p>Privacy Policy</p>

                    </div>
                    <div className='socials'>
                        <SlSocialFacebook className='SM' />
                        <TiSocialTwitter className='SM' />
                        <TiSocialInstagram className='SM' />

                    </div>

                </div>
                <div className='last'>
                    <p>Copyright <AiOutlineCopyrightCircle /> 2023 Be Bold | Powered by Be Bold</p>

                </div>
            </div>
        </>
    )
}

export default Footer