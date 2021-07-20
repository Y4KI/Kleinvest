import React from 'react'
import './About.css'
import Title from '../../components/title'
import TI from '../../components/TextIcon'
import { BsFillChatDotsFill, BsFillCircleFill } from "react-icons/bs";

function About() {
    return <div className="About mt-5">
        <Title title="About Us" text="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "></Title>
        <div className="About-content container d-md-flex">
            <div className="about-content__video">
                <img src="people.jpg" className="About-content__people"/>
            </div>
            <div className="about-content__comment">
                <div className="ac__comment">
                <h1 className="About-content__title">
                    Most trusted in our field
                </h1>
                <p className="About-content__text">
                    Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
                </p>

                <TI 
                    Icon={<BsFillCircleFill/>} 
                    Text={"Things on a very small scale ..."} 
                    Title={"the quick fox jumps over the lazy dog"}
                />
                <TI 
                    Icon={<BsFillChatDotsFill/>} 
                    Text={"Things on a very small scale ..."} 
                    Title={"the quick fox jumps over the lazy dog"}
                />
                </div>
            </div>
        </div>
    </div>
}

export default About