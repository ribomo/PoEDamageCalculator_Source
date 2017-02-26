/**
 * Created by ribomo on 2/19/17.
 */
import React, {Component} from 'react';

class EditableField extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            editable: false,
            text: this.props.value,
        };
    }

    handleClick(event) {
        const isTrue = this.state.editable === false;
        this.setState({editable: isTrue});
    }

    render() {
        if (this.state.editable === false) {
            return (
                <span onClick={this.handleClick}>
                {this.state.text}
                </span>
            );
        } else {
            return (
                <input type="text"
                       value={this.state.text}
                       onClick={this.handleClick}/>
            );
        }
    }
}

EditableField.propTypes = {
    value: React.PropTypes.string
};

export default EditableField;