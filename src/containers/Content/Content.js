import React from 'react'
import './Content.css'
import Button from '../../components/button'

function Content() {
    return (
        <div className="container d-flex justify-content-center">
            <div className="header_content text-white ">
                <h1 className="header_content__title mb-4">Creating a Beautifull & Usefull Solutitons</h1>
                <p className="header_content__paragraph mb-4">We know how large objects will act, but things on a small scale just do not act that way.</p>
            <div className="header_content__button">
                <Button text="Get Quote Now" className="me-3 mybtn" active></Button>
                <Button text="Learn More" className="my-3 mybtn"></Button>
            </div>
            </div>
        </div>      
    )
}

export default Content