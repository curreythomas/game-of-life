import React, {Component} from 'react'

class Box extends Component{
   
    render(){
        // returning a div with two props on it.
        return(
            <div 
                // determining whether the className of this div should be set to box alive or box dead aka black or white. 
                className={this.props.on ? "box alive" : "box dead"}
                // simple toggle of on an off when the box is clicked. 
                onClick={() => this.props.clicked(!this.props.on)}
            />
        )
    }
}

export default Box