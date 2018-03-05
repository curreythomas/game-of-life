import React from 'react';
import Box from './Box'
import { addIndex, map } from 'ramda'

// function that takes the index and the whole list and will allow me to associate the row and column value I am at.
const mapIndexed = addIndex(map)

class Grid extends React.Component{
    render(){
        //creating a width variable to pass into the style of the grid.
        const width = (this.props.cols * 16)

        return(
            /*returns a div with a javascript expression that maps over both the rows and columns and creates the row:col value for each cell and 
            passes that information to the box component which creates the div (or cell) for the entire grid. */
            <div className="grid" style={{width: width}}>
                {
                    mapIndexed((row, rowIndex) =>
                        mapIndexed((cell, colIndex) => (
                            <Box
                                on={cell}
                                clicked={this.props.toggleBox(rowIndex, colIndex)}
                                key={`${rowIndex}:${colIndex}`} 
                            />
                        ),
                        //data passed to the first mapIndexed 
                        row
                        ),
                    //data passed to the second mapIndexed
                    this.props.gridFull
                    )
                }
            </div>
        )
    }
}

export default Grid