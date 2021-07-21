import React from 'react'
import './footer.css'
import { AiFillTwitterCircle , AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Slide } from 'react-awesome-reveal';

export default function Footer() {
    return  <Slide triggerOnce="true" direction="up">
            <footer className="footer">
                <div className="footer-sm">
                    <h1 className="footer-sm__logo">BrandName</h1>
                    <div className="footer-sm__icons">
                        <FaFacebook/>
                        <AiOutlineInstagram/>
                        <AiFillTwitterCircle/>
                    </div>
                </div>
                <div className="footer-bottom">
                <div className="footer-sm__box">
                    <a href="/"><h1>Company Info</h1></a>
                    <a href="/"><p>We are hiring</p></a>
                    <a href="/"><p>About Us</p></a>
                    <a href="/"><p>Carrier</p></a>
                    <a href="/"><p>Blog</p></a>
                </div>
                <div className="footer-sm__box">
                    <a href="/"><h1>Company Info</h1></a>
                    <a href="/"><p>We are hiring</p></a>
                    <a href="/"><p>About Us</p></a>
                    <a href="/"><p>Carrier</p></a>
                    <a href="/"><p>Blog</p></a>
                </div>
                <div className="footer-sm__box">
                    <a href="/"><h1>Company Info</h1></a>
                    <a href="/"><p>We are hiring</p></a>
                    <a href="/"><p>About Us</p></a>
                    <a href="/"><p>Carrier</p></a>
                    <a href="/"><p>Blog</p></a>
                </div>
                <div className="footer-sm__box">
                    <a href="/"><h1>Company Info</h1></a>
                    <a href="/"><p>We are hiring</p></a>
                    <a href="/"><p>About Us</p></a>
                    <a href="/"><p>Carrier</p></a>
                    <a href="/"><p>Blog</p></a>
                </div>
                <div className="footer-sm__box">
                    <a href="/"><h1>Company Info</h1></a>
                    <div className="footer-input-box">
                        <input type="text" placeholder="Your Email"/>
                        <button>Subscribe</button>
                    </div>
                    <a href="/"><p>Lorem ipsum dolor sit.</p></a>
                </div>
                </div>
            </footer>
            </Slide>
}