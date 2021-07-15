import React from 'react'
import './person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


class Person extends React.Component {
    constructor(props) {
        super(props)

        this.state = props
    }

    render() {
        return <div className="person d-flex justify-content-between">
            <div className="person__img">
                <img src={this.state.url} alt="Person" />
            </div>
            <div className="person__comment ms-2">
                <h1 className="person__name">
                    {this.state.name}
                </h1>
                <p className="person__job mb-3">
                    {this.state.job}
                </p>
                <div className="rate">
                <FontAwesomeIcon icon={faStar} className="star"/>
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                </div>
                <p className="comment">
                    {this.state.comment}
                </p>
            </div>
        </div>
    }
}

export default Person
