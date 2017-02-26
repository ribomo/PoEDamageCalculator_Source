/**
 * Created by ribomo on 2/17/17.
 */
import React, { Component } from 'react';

class ResultRow extends Component{

    style = {
        marginTop: 10,
    };

    render(){
        return(
            <div className="ResultRow" style={this.style}>
                <span>Total Multiplier: </span><span>{this.props.result}</span>
            </div>
        )
    }
}

export default ResultRow;