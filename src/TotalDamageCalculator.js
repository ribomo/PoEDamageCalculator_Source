/**
 * Created by ribomo on 2/23/17.
 */
import React, {Component} from 'react';
import * as Helper from './Helper';
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper';

class TotalDamageCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseDamage: 100,
        };

        this.onValueChange = this.onValueChange.bind(this);
    }

    calculation(base, increased, more) {
        return base * (1 + increased) * more;
    }

    onValueChange(event) {
        const value = Helper.returnValue(event.target.value);
        this.setState({baseDamage: value});
    }

    style = {
        width: 'auto',
        padding: 20,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    };

    render() {
        return (
            <Paper style={this.style}>
                <TextField type="number" onChange={this.onValueChange} value={this.state.baseDamage} floatingLabelText="Base Damage"/>
                <br />
                <span>Total damage equals: {
                    this.calculation(
                        this.state.baseDamage,
                        this.props.increasedMultiplier,
                        this.props.moreMultiplier)
                }</span>
            </Paper>
        );
    }

}

TotalDamageCalculator.propTypes = {
    increasedMultiplier: React.PropTypes.number.isRequired,
    moreMultiplier: React.PropTypes.number.isRequired
};

export default TotalDamageCalculator;