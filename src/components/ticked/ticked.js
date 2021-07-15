import React from 'react'
import './ticked.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class Ticked extends React.Component {
    constructor(props) {
        super(props);

        this.state = props
    }

    render() {
        return  <div className="ticked d-flex mb-1">
                    <FontAwesomeIcon icon={faCheck} className={`tick_icon mx-3 ${this.state.active && "enabled" || "disabled"}`}/>
                    <p className="ticked">
                        {this.state.text}
                    </p>
                </div>
    }

}

export default Ticked