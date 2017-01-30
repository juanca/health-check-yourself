import React from 'react';

import styles from './input-list-item.css';

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
      <div className={styles.container}>
        <input
          className={styles.input}
          key={this.state.uid}
          name={`${this.state.uid}`}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          type="text"
          value={this.props.value} />
      </div>
    );
  }
}

InputListItem.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};
