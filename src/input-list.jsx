import React from 'react';

import ListItem from './input-list-item.jsx';

export default class InputList extends React.Component {
  constructor(props) {
    super(props);

    this.renderListItem = this.renderListItem.bind(this);
  }

  renderListItem(itemProps, index) {
    const Input = this.props.itemComponent;
    return <Input
      key={index}
      onChange={this.props.onChange.bind(null, index)}
      placeholder={this.props.placeholder}
      {...itemProps}
    />;
  }

  render() {
    return (
      <fieldset>
        <legend>{this.props.legend}</legend>
        {this.props.values.map(this.renderListItem)}
        {this.renderListItem({ value: '' }, 'new')}
      </fieldset>
    );
  }
}

InputList.propTypes = {
  itemComponent: React.PropTypes.any,
  legend: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  values: React.PropTypes.arrayOf(React.PropTypes.shape({
    value: React.PropTypes.string
  })).isRequired,
};

InputList.defaultProps = {
  itemComponent: ListItem,
};
