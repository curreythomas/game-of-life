import React, { Component } from 'react';

class Inputs extends Component {
    constructor(props){
    super(props);

    /*setting inital state within the Inputs component for rows and cols to be equal to the 
    rows and cols of the parent App component passed down through props.
    */
    this.state = {
            rows: this.props.rows,
            cols: this.props.cols
        }
    }

    /* Creating a handleChange function that takes in an event. 
    Declares target and name as consts for ease of reading and sets the state */
    handleChange = (e) => {
        const target = e.target
        const name = target.name
        this.setState({
            [name]: target.value,
        })
    }


    /* Creating a handleSubmit function that takes in an event.
        e.preventDefault is preventing the form from submitting automatically when the page renders.
        this.props.onNewGridRequest is an action that passes the rows and cols from the inputs
        up to the parent App component. 
    */
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onNewGridRequest(this.state.rows, this.state.cols)
    }

    render() {
        return(
            /* creating a form with rows and columns as labels to the inputs who have a "type" of number 
                and a min value of 10 and max value of 50 to help with performance. the value is set to the
                current state which initially will be the values from the parent app component. When the values 
                are changed by the user this will update the state of the rows/cols within the Inputs component. 
                When the form is submitted the current state of the Inputs component will be sent up to the parent 
                App component and state will be updated there with the current rows and columns.
            */
            <form onSubmit={this.handleSubmit}>
                Rows:
                <input type="number" name="rows" min="10" max="50" placeholder="Rows" value={this.state.rows} onChange={this.handleChange} className='inputs' />
                Columns:
                <input type="number" name="cols" min="10" max="50" placeholder="Columns" value={this.state.cols} onChange={this.handleChange} className='inputs'/><br />
                <button type="submit" value='Submit' className='createButton'>Create Grid</button>
            </form>
        )
    }
}

export default Inputs