import React from 'react'
import './Card.css'
import Cards from '../../components/Cards'
import Title from '../../components/title'

function Card() {
    return <div className="Card">
        <div className="container">
            <Title title="Better Strategy With  Quality Business" text="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "></Title>
            <div className="Card__menu mt-5">
                <Cards 
                    title="Investment Trading" 
                    text="the quick fox jumps over the lazy dog"
                ></Cards>
                <Cards 
                    title="Raising Funds" 
                    text="the quick fox jumps over the lazy dog"
                ></Cards>
                <Cards 
                    title="Financial Analysis" 
                    text="the quick fox jumps over the lazy dog"
                ></Cards>
                <Cards 
                    title="Taxation Planning" 
                    text="the quick fox jumps over the lazy dog"
                ></Cards>
                <Cards 
                    title="Save money and time" 
                    text="the quick fox jumps over the lazy dog"
                ></Cards>
                <Cards 
                    title="Outsourced Consulting " 
                    text="the quick fox jumps over the lazy dog"
                ></Cards>
            </div>
        </div>
    </div>
}

export default Card