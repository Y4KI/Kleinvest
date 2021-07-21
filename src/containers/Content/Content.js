import React from 'react'
import './Content.css'
import Button from '../../components/button'
import Title from '../../components/title'
import { Slide } from 'react-awesome-reveal'

function Content() {
    return  <Slide triggerOnce="true" delay="5">
            <div className="container d-flex justify-content-center">
            <div className="header_content text-white ">
                <Title title="Creating a Beautifull & Usefull Solutitons" text="We know how large objects will act, but things on a small scale just do not act that way."/>
                <div className="header_content__button">
                    <Button text="Get Quote Now" className="me-3 mybtn" active></Button>
                    <Button text="Learn More" className="my-3 mybtn"></Button>
                </div>
            </div>
            </div> 
            </Slide>     
}

export default Content