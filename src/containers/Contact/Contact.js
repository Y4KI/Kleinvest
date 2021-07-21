import React from 'react'
import Ccard from '../../components/CCard/CCard'
import Title from '../../components/title'
import { AiOutlinePhone } from "react-icons/ai";
import { HiLocationMarker , HiOutlineMail } from "react-icons/hi";
import './Contact.css'
import { Slide } from 'react-awesome-reveal';

export default function Contact() {
    return  <Slide direction="up" triggerOnce="true">    
            <div className="contact container">
                <Title title="Get In Touch" text="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"/>

                <div className="ccard-menu d-md-flex">
                <Ccard 
                    Icon={<AiOutlinePhone className="cc-icon"/>}
                    className="ccard-box"
                    Title="Get Support"
                    Text1="georgia.young@example.com"
                    Text2="georgia.young@ple.com"
                    Button="Submit Request"
                />
                <Ccard 
                    Icon={<HiLocationMarker className="cc-icon"/>}
                    className="ccard-box-main"
                    Title="Get Support"
                    Text1="georgia.young@example.com"
                    Text2="georgia.young@ple.com"
                    Button="Submit Request"
                />
                <Ccard 
                    Icon={<HiOutlineMail className="cc-icon"/>}
                    className="ccard-box"
                    Title="Get Support"
                    Text1="georgia.young@example.com"
                    Text2="georgia.young@ple.com"
                    Button="Submit Request"
                />
                </div>
            </div>
            </Slide>

}