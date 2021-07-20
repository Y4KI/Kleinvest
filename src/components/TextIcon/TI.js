import React from 'react'
import { useState } from 'react'
import './TI.css'

function TI(props) {
    const Icon = props.Icon
    const Text = props.Text
    const Title = props.Title
    
    const [icon, seticon] = useState(Icon)
    const [title, settitle] = useState(Title)
    const [text, settext] = useState(Text)

    return <div className="TI d-flex">
        <div className="TI__icon">{icon}</div>
        <div className="TI__Comment">
            <h1 className="TI__title">{title}</h1>
            <p className="TI__text">{text}</p>
        </div>
    </div>
}

export default TI