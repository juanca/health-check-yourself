import React from 'react';

import styles from './input-list-item.css';

export default function InputListItem (props) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        key={props.inputKey}
        name={props.inputName}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type="text"
        value={props.value} />
    </div>
  );
}

InputListItem.propTypes = {
  key: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};

InputListItem.defaultProps = {
  onChange: () => {},
  placeholder: '',
}
