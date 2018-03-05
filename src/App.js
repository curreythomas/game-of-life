import React, {Component} from 'react';
import Grid from './components/Grid'
import Inputs from './components/Inputs'
import Buttons from './components/Buttons'
import {times, clone } from 'ramda'


// random function that generates a random decimal value between 0 and 1 and rounds it to either 0 or 1. 1 = true, 0 = false
const random = () => Math.round(Math.random()) === 1 ? true : false

class App extends Component {
    constructor(){
        super();
        this.speed = 10;
        
        // defining the initial state in the App component. 
        this.state = {
            // makes an initial array of 30 arrays with 40 values in each array set to false. 
            gridFull: Array(30).fill().map(() => Array(40).fill(false)),
            rows: 30,
            cols: 40
        }
    }
    
    /* declaring a function - toggleBox- that takes in a row and a col as its parameters. 
    this function allows a user to select a box and make it living or kill it. */
    toggleBox = (row , col) => {
        // using let to define a block scope local variable called grid and setting that equal to a clone of gridFull.
        let grid = clone(this.state.gridFull)
        // returning an anonymous function that takes cell as a parameter
        return (cell) => {
            // sets the grid at the current row:col to the value of the cell that is passed in
            grid[row][col] = cell
            // updates the state of gridFull with the new grid that has a cell toggled on or off.
            this.setState({
                gridFull: grid
            })
        } 
    }

    // function that stops the current interval and sets a new interval that takes the run function and the speed to run.
    start = () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.run, this.speed);
    }

    // function that stops the current interval.
    stop = () => {
       clearInterval(this.intervalId);
    }

    /* function that takes in the rows and columns as it parameters. 
    Then declares gridFull as a constant that is equal to a function.
    The function assigns a value of true or false to each row:col pair 
    using the random function on each row and column value.
    Then sets the state to gridFull and because the const within the scope of 
    the seed function is the named the same as the key in our state, gridFull
    only needs to be written once. */
    seed = (rows, cols) => {
        const gridFull = times(row => times(col => random(), cols), rows)
        this.setState({
            gridFull
        })
    }

    /* the reset function is doing the same thing as the seed function but instead
        of assigning each row:col pair a value of true or false, they will all be set 
        to false. in essense turning all of the boxes off and having a clear grid. */
    reset = (rows, cols) => {
        const gridFull = times(row => times(col => false, cols), rows)
        this.setState({
            gridFull
        })
    }

    run = () => {
        let g = this.state.gridFull;

        /* using ramda clone to create a new array. this will allow the ability to set a new gridArray 
        of the updated state of each cell based on criteria below.*/
        let g2 = clone(this.state.gridFull);

        //loops through the entire grid looking at each row:col pair checking the count of the neighbors that are alive around that specific pair.
        for (let r = 0; r < this.state.rows; r++) {
            for (let c = 0; c < this.state.cols; c++) {
                //setting the initial count to 0
                let count = 0;
                
                // checking the cell directly above the the current cell
                if (r > 0) if (g[r - 1][c]) count++;
                // checking the cell above and to the left of the current cell
                if (r > 0 && c > 0) if (g[r - 1][c - 1]) count++;
                // checking the cell above and to the right of the current cell
                if (r > 0 && c < this.state.cols - 1) if (g[r - 1][c + 1]) count++;
                // checking the cell directly to the right of the current cell
                if (c < this.state.cols - 1) if (g[r][c + 1]) count++;
                // checking the cell directly to the left of the current cell
                if (c > 0) if (g[r][c - 1]) count++;
                // checking the cell directly below the current cell
                if (r < this.state.rows - 1) if (g[r + 1][c]) count++;
                // checking the cell below and to the left of the current cell
                if (r < this.state.rows - 1 && c > 0) if (g[r + 1][c - 1]) count++;
                // checking the cell below and to the right of the current cell
                if (r < this.state.rows - 1 && this.state.cols - 1) if (g[r + 1][c + 1]) count++;
                
                /* if the count of living cells surrounding the current cell is less
                 than 2 or greater than 3, then the current cell being evaluated will 
                 be set to false in the cloned array*/
                if (g[r][c] && (count < 2 || count > 3)) g2[r][c] = false;
                /* if the count of living cells surrounding the current cell is exactly equal 
                to 3 and the current cell is not alive, the current cell being evaluated will 
                be set to true in the cloned array. Becoming alive.*/
                if (!g[r][c] && count === 3) g2[r][c] = true;
            }
        }
        // gridFull is set to the cloned array with the updated status of each cell
        this.setState({
            gridFull: g2,

        })

    }

    //When the render method executes the componentDidMount function will run. This will seed the grid initially
    componentDidMount() {
        this.seed(this.state.rows, this.state.cols)
    }

    render() {
    return (
        /* JSX elements must be wrapped in an enclosing tag so to render all of this it must be wrapped in a div.
            the header has the title, inputs, and buttons component in it. The components rendered here are passed
            data down as props and actions are handled in the respective child components until actions are sent back 
            up to this parent App component.   
        */
            <div>
                <header className='header'>
                    <h1 className='title'>Game-of-Life</h1>
                    <Inputs 
                        rows={this.state.rows}
                        cols={this.state.cols}
                        onNewGridRequest={(rows, cols) => {
                            this.seed(Number(rows), Number(cols))
                            this.setState({rows: Number(rows), cols: Number(cols)})    
                        }}
                    />
                    <Buttons 
                        start={this.start}
                        stop={this.stop}
                        reset={() => this.reset(this.state.rows, this.state.cols)}
                        seed={() => this.seed(this.state.rows, this.state.cols)}
                    />
                </header>
                <Grid
                    gridFull={this.state.gridFull}
                    rows={this.state.rows}
                    cols={this.state.cols}
                    toggleBox={this.toggleBox}
                />
            </div>
            )   
        }
    }

export default App