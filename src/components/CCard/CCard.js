import './CCard.css'

import { useState } from "react"

export default function Ccard(props) {
    const Icon = props.Icon
    const Text1 = props.Text1
    const Text2 = props.Text2
    const Title = props.Title
    const Button = props.Button
    const className = props.className
    
    const [icon, seticon] = useState(Icon)
    const [title, settitle] = useState(Title)
    const [text1, settext1] = useState(Text1)
    const [text2, settext2] = useState(Text2)
    const [button, setbutton] = useState(Button)
    const [myclass, setmyclass] = useState(className)

    return  <div className={`Ccard ${myclass}`}>
                <div>{icon}</div>
                <div className="cc__comment">
                    <p className="cc__text">{text1}</p>
                    <p className="cc__text">{text2}</p>
                    <h1 className="cc__title">{title}</h1>
                    <button className="cc__btn">{button}</button>
                </div>
            </div>
}