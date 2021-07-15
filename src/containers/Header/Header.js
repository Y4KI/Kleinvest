import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    state = { show : true}

    show = () => {
        this.setState((state) => {
            return { show: !state.show}
        })
    }

    render(){
        return (
            <header className="header mt-3">
        <div className="container d-flex align-middle justify-content-between flex-wrap">
            <div className="menu_left d-flex">
                <a href="/" className="logo border-0 text-white ms-5">BrandName</a>
                <ul className="header__menu d-md-flex ms-5 d-none">
                    <li className="menu__list mx-2"><a href="/" className="menu__link text-white">Home</a></li>
                    <li className="menu__list mx-2"><a href="/" className="menu__link text-white">Product</a></li>
                    <li className="menu__list mx-2"><a href="/" className="menu__link text-white">Pricing</a></li>
                    <li className="menu__list mx-2 me-10"><a href="/" className="menu__link text-white">Contact</a></li>
                </ul>
            </div>
            <div className="Icons d-flex d-md-none me-5">
                <button className="btn text-white"><FontAwesomeIcon icon={faSearch} /></button>
                <button className="btn text-white"><FontAwesomeIcon icon={faShoppingCart} /></button>
                <button className="btn text-white" onClick={this.show}><FontAwesomeIcon icon={faBars} /></button>
            </div>
            <div className="login ms-10 d-none d-lg-flex">
                <button className="border-0 text-info bg-transparent">Login</button>
                <button className="border-0 text-white py-2 px-3 ms-2">Become a member <FontAwesomeIcon icon={faChevronRight} /> </button>
            </div>
            <ul className={`text-center mt-5 w-100 ${this.state.show && "d-none" || ""} d-block d-md-none`}>
                        <li className="my-4"><a href="/" className="text-white">Home</a></li>
                        <li className="my-4"><a href="/" className="text-white">Product</a></li>
                        <li className="my-4"><a href="/" className="text-white">Pricing</a></li>
                        <li className="my-4"><a href="/" className="text-white">Contact</a></li>
            </ul>
        </div>
    </header>
        )
    }
} 

export default Header