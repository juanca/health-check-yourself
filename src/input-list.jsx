import React from 'react';

import ListItem from './input-list-item.jsx';

export default class InputList extends React.Component {
  constructor(props) {
    super(props);

    this.renderListItem = this.renderListItem.bind(this);
  }

  renderListItem(value, index) {
    const Input = this.props.itemComponent;
    return <Input key={index} placeholder={this.props.placeholder} value={value} />;
  }

  render() {
    return (
      <fieldset>
        <legend>{this.props.legend}</legend>
        {this.props.values.map(this.renderListItem)}
        {this.renderListItem('', 'new')}
      </fieldset>
    );
  }
}

InputList.propTypes = {
  itemComponent: React.PropTypes.any,
  legend: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

InputList.defaultProps = {
  itemComponent: ListItem,
};
