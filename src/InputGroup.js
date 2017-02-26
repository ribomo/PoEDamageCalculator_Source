/**
 * Created by ribomo on 2/17/17.
 */
import React, {Component} from 'react';
import InputRow from './InputRow'

class InputGroup extends Component {
    render() {
        const list = this.props.groupInfo.map(
            (obj) => (
                <InputRow key={obj.id}
                          rowInfo={obj}
                          onValueChange={this.props.onValueChange}
                          onDelete={this.props.onDelete}/>
            ));
        return (
            <div>
                {list}
            </div>
        );
    }
}

InputGroup.propTypes = {
    //This object helps generate the InputRow component
    groupInfo: React.PropTypes.arrayOf(React.PropTypes.object),

    //Function that evoke when the name changed
    onNameChange: React.PropTypes.func,
    onValueChange: React.PropTypes.func,
    onDelete: React.PropTypes.func,
};

export default InputGroup;