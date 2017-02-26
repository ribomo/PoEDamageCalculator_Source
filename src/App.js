import React, {Component} from 'react';
import './css/App.css';
import DamageCalculator from './DamageCalculator'
import TotalDamageCalculator from './TotalDamageCalculator'
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as Helper from './Helper';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            increasedValue: 0,
            moreValue: 1,
        };
        this.sumTotalValue = this.sumTotalValue.bind(this);
        this.multiplyTotalValue = this.multiplyTotalValue.bind(this);
        injectTapEventPlugin();
    }

    //Return the sum of the value in side an array
    sumTotalValue(arrayValue) {
        let result = 0;
        arrayValue.forEach((value) => {
            result += value;
        });
        this.setState({increasedValue: result});
        return Helper.NumberToPercentage(result);
    }

    multiplyTotalValue(arrayValue) {
        let result = 1;
        arrayValue.forEach((value) => {
            result *= 1 + value;
        });
        this.setState({moreValue: result});
        return Helper.NumberToPercentage(result);
    }

    render() {
        return (
            <div className="App">
                <DamageCalculator calculateTotalValue={this.sumTotalValue} title="Increased multiplier"/>
                <br />
                <DamageCalculator calculateTotalValue={this.multiplyTotalValue} title="More multiplier"/>
                <br />
                <TotalDamageCalculator increasedMultiplier={this.state.increasedValue} moreMultiplier={this.state.moreValue}/>
            </div>
        );
    }
}

export default App;
