/**
 * Created by ribomo on 2/17/17.
 */

import React, {Component} from 'react';
import InputGroup from './InputGroup';
import ResultRow from './ResultRow';
import * as Helper from './Helper';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import AddIcon from 'material-ui/svg-icons/content/add'

class DamageCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            damageValues: [
                {id: '1', name: 'Fire', value: 0},
                {id: '2', name: 'Cold', value: 0},
                {id: '3', name: 'Lightning', value: 0},
            ],
            total: 0,
            nextIndex: 4, //Don't forgot format the index to string when insert in to the object
        };

        this.calculateTotalValue = this.props.calculateTotalValue;

        //Rebind this
        this.onValueChange = this.onValueChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.addDamageType = this.addDamageType.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    componentDidMount() {
        this.setState({typeValues: {}})
    }

    //Evoke when the name filed changed
    onNameChange(obj) {
        let dmgArray = this.state.damageValues;
        dmgArray.forEach((damageType) => {
            if (damageType.id === obj.id) {
                damageType.name = obj.newName;
            }
        });
        this.setState({damageValues: dmgArray});
        console.log(this.state.damageValues);
    }

    //On change handler for all the text field
    onValueChange(event) {
        const id = event.target.id;
        const targetValue = Helper.returnValue(event.target.value);
        let value = targetValue / 100.0;
        let dmgArray = this.state.damageValues;
        let calValueArray = [];
        dmgArray.forEach((obj) => {
            if (obj.id === id) {
                obj.value = value;
            }
            calValueArray.push(obj.value);
        });
        const total = this.calculateTotalValue(calValueArray);

        this.setState({damageValues: dmgArray, total: total});
    }

    onDelete(info) {
        const id = info.id;
        const obj = this.state.damageValues.filter((obj) => {
            return obj.id === id;
        })[0];
        const dmgArray = this.state.damageValues;
        const deleteIndex = dmgArray.indexOf(obj);
        dmgArray.splice(deleteIndex, 1);
        let calValueArray = [];
        dmgArray.forEach((obj) => {
            calValueArray.push(obj.value);
        });
        const total = this.calculateTotalValue(calValueArray);
        this.setState({damageValues: dmgArray, total: total});
    }

    addDamageType() {
        let dmgArray = this.state.damageValues;
        let nextIndex = this.state.nextIndex;
        const obj = {id: nextIndex.toString(), name: 'new filed', value: 0};

        dmgArray.push(obj);
        this.setState({damageValues: dmgArray, nextIndex: nextIndex += 1});
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
                <h2>{this.props.title}</h2>
                <InputGroup groupInfo={this.state.damageValues}
                            onValueChange={this.onValueChange}
                            onDelete={this.onDelete}
                            onNameChange={this.onNameChange}/>
                <RaisedButton icon={<AddIcon/>} onClick={this.addDamageType} fullWidth={true} primary={true}/>
                <ResultRow result={this.state.total}/>
            </Paper>
        )
    }
}

DamageCalculator.propTypes = {

    //Use to calculate the total multiplier value
    calculateTotalValue: React.PropTypes.func.isRequired,
    title: React.PropTypes.string,
};

export default DamageCalculator;