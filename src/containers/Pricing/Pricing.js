import React from 'react'
import './Pricing.css'
import Title from '../../components/title'
import PrCard from '../../components/prCard'
import { Slide } from 'react-awesome-reveal'

function Pricing() {
    return  <Slide direction="up" triggerOnce="true">
            <div className="container pricing">
              <Title title="Pricing" text="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics" />
             <div className="pricing__cards d-md-flex justify-content-between mt-5">
              <PrCard title="Free" text="Organize across all apps by hand" price="0$"/>
              <PrCard title="Free" text="Organize across all apps by hand" price="9.99$"/>
              <PrCard title="Free" text="Organize across all apps by hand" price="19.99$"/>
            </div>
            </div>
            </Slide>
}

export default Pricing