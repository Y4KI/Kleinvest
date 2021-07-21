import React from 'react'
import './Client.css'
import Title from '../../components/title'
import Person from '../../components/person'
import { Slide } from 'react-awesome-reveal'

export default function Client() {
    return  <Slide direction="up" triggerOnce="true">
            <div className="client">
                <Title title="What Clients Say" text="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"></Title>
            <div className="container-lg">
                <div className="people d-md-flex justify-content-between mt-5">
                <Person url="u1.png" name="Regina Miles" job="Designer" comment="This proved to be impossible using concepts of space and time. Einstein new view of time first and then"></Person>
                <Person url="u2.png" name="Regina Miles" job="Designer" comment="This proved to be impossible using concepts of space and time. Einstein new view of time first and then"></Person>
                </div>
            </div>
            </div>
            </Slide>
}