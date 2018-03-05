import React, { Component } from 'react';

class Buttons extends Component {
    
    render() {
        /* returning a div with four buttons inside. 
            each button is styled throught the className buttons passed down through the app from the index.css file
            the onClick is set to run the function from the props that are passed down to it from the app component. 
        */
        return (
            <div>
                <button className='buttons' onClick={this.props.start}>
                    Start
                </button>
                <button className='buttons' onClick={this.props.stop}>
                    Stop
                </button>
                <button className='buttons' onClick={this.props.reset}>
                    Reset
                </button>
                <button className='buttons' onClick={this.props.seed}>
                    Seed
                </button>
            </div>
        )
    }
}

export default Buttons