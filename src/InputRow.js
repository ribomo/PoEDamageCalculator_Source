/**
 * Created by ribomo on 2/17/17.
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DeleteForeverIcon from 'material-ui/svg-icons/action/delete-forever'

class InputRow extends Component{
    constructor(props){
        super(props);
        this.id = this.props.rowInfo.id;
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleValueChange(event){
        this.props.onValueChange(event);
    }

    handleDelete(){
        const obj = {'id': this.id};
        this.props.onDelete(obj);
    }

    handleTextChange(obj){
        obj['id'] = this.id;
        this.props.onNameChange(obj);
    }

    render(){
        return(
            <div className="InputRow">
                <TextField defaultValue={this.props.rowInfo.name} id={"typeName" + this.id}/>
                <span> : </span>
                <TextField type="number" hintText="Enter value in percent" id={this.id} onChange={this.handleValueChange}/>
                <span>% </span>
                <RaisedButton icon={<DeleteForeverIcon/>} secondary={true} onClick={this.handleDelete} />
            </div>
        );
    }
}

InputRow.propTypes = {
    //The function that revoke when the name tag changed
    onNameChange: React.PropTypes.func,

    //The function that revoke when the number changed
    onValueChange: React.PropTypes.func,

    onDelete: React.PropTypes.func,
    rowInfo: React.PropTypes.object,
};

export default InputRow;