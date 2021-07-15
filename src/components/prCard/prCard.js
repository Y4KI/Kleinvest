import React from 'react'
import './prCard.css'
import Ticked from '../ticked'

class PrCard extends React.Component {
    constructor(props) {
        super(props) 

        this.state = props
    }

    render() {
        return <div className="prCard">
            <div className="prCard__content">
            <h1 className="pr__title mt-5 mb-2">
                {this.state.title}
            </h1>
            <p className="pr__text">
                {this.state.text}
            </p>
            <h1 className="pr__Price">
                {this.state.price}
            </h1>
            <p className="pr__due">
                per month
            </p>
            <button className="btn bg-primary text-white mb-5">
                Try for free    
            </button>
            </div>
            <Ticked text="Unlimited product updates" active/>
            <Ticked text="Unlimited product updates" active/>
            <Ticked text="Unlimited product updates" active/>
            <Ticked text="1GB  Cloud storage"/>
            <Ticked text="Email and community support"/>
        </div>
    }
}

export default PrCard