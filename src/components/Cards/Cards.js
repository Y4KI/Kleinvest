import React, { useState } from 'react'
import './Cards.css'
import { BsPeople } from "react-icons/bs";

export default function Cards(props) {
    const Title = props.title
    const Text = props.text

    const [title, settitle] = useState(Title)
    const [text, settext] = useState(Text)

    return  <div className="Cards d-flex justify-content-between">
            <div>
                <BsPeople className="Cards__logo"/>
            </div>
            <div className="text">
                <h1 className="Card__title">{title}</h1>
                <p className="Card__text">{text}</p>
            </div>
            </div>
}