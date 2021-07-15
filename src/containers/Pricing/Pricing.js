import React from 'react'
import './Pricing.css'
import Title from '../../components/title'
import PrCard from '../../components/prCard'

function Pricing() {
    return <div className="pricing">
        <div className="container">
          <Title title="Pricing" text="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics" />
          <div className="pricing__cards d-flex justify-content-between mt-5">
            <PrCard title="Free" text="Organize across all apps by hand" price="0$"/>
            <PrCard title="Free" text="Organize across all apps by hand" price="9.99$"/>
            <PrCard title="Free" text="Organize across all apps by hand" price="19.99$"/>
          </div>
        </div>
    </div>
}

export default Pricing