import React from 'react';

import InputList from './components/input-list.jsx';

let counter = 0;

export default class InputListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: `input-list-item-${counter++}`,
    };
  }

  render() {
    return (
      <InputList
        inputKey={this.state.uid}
        inputName={this.state.uid}
        {...this.props}
      />
    );
  }
}

InputListItem.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};
