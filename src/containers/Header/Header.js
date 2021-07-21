import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { Slide } from "react-awesome-reveal";

export default function Header() {
    const [visibility, setvisibility] = useState(true)

    const show = () => {
        setvisibility(!visibility)
    }
    return  <Slide triggerOnce="true">
            <header className="header mt-3">
            <div className="container d-md-flex justify-content-between flex-wrap nav">

            <div className="menu_left d-sm-flex align-items-center">
                <a href="/" className="nav__logo ms-5">BrandName</a>
                <ul className="header__menu d-md-flex d-none ms-5">
                    <li className="menu__list"><a href="/" className="menu__link">Home</a></li>
                    <li className="menu__list"><a href="/" className="menu__link">Product</a></li>
                    <li className="menu__list"><a href="/" className="menu__link">Pricing</a></li>
                    <li className="menu__list"><a href="/" className="menu__link">Contact</a></li>
                </ul>
            </div>

            <div className="Icons d-none">
                <button className="btn text-white"><FontAwesomeIcon icon={faSearch} /></button>
                <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} /></button>
                <button className="btn text-white" onClick={show}><FontAwesomeIcon icon={faBars} /></button>
            </div>

            <div className="login ms-10 d-none d-md-flex">
                <button className="border-0 text-info bg-transparent">Login</button>
                <button className="btn-member btn-primary ms-2">Become a member</button>
            </div>

                <Slide direction="left">
                    <ul className={`text-center mt-5 w-100 ${visibility && "d-none" || ""} d-block d-md-none`}>
                        <li className="my-4"><a href="/" className="text-white">Home</a></li>
                        <li className="my-4"><a href="/" className="text-white">Product</a></li>
                        <li className="my-4"><a href="/" className="text-white">Pricing</a></li>
                        <li className="my-4"><a href="/" className="text-white">Contact</a></li>
                    </ul>
                </Slide>
            </div>
            </header>
            </Slide>
}