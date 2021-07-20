import React from 'react'
import './Title.css'

class Title extends React.Component {
    constructor(props){
        super(props)

        this.state = props
    }

    render() {
        return  <div className={`title-bar container${this.state.className}`} >
                    <h1 className="title">{this.state.title}</h1>
                    <p className="text">{this.state.text}</p>
                </div>
    }
}

export default Title