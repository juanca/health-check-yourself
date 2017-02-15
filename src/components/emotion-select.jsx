import React from 'react';

const happySvg = require('../svg/happy-donger.svg');
const neutralSvg = require('../svg/neutral-donger.svg');
const sadSvg = require('../svg/sad-donger.svg');
const styles = require('./emotion-select.css');

export default class EmotionSelect extends React.Component {
  render() {
    return (
      <fieldset id={this.props.id}>
        <legend>{this.props.legend}</legend>
        <label className={styles.label} htmlFor={`${this.props.id}-happy`}>
          <svg className={styles['happy-donger']}>
            <use xlinkHref={happySvg} />
          </svg>
        </label>
        <input type="radio" id={`${this.props.id}-happy`} name={this.props.id} />

        <label className={styles.label} htmlFor={`${this.props.id}-neutral`}>
          <svg className={styles['neutral-donger']}>
            <use xlinkHref={neutralSvg} />
          </svg>
        </label>
        <input type="radio" id={`${this.props.id}-neutral`} name={this.props.id} />

        <label className={styles.label} htmlFor={`${this.props.id}-sad`}>
          <svg className={styles['sad-donger']}>
            <use xlinkHref={sadSvg} />
          </svg>
        </label>
        <input type="radio" id={`${this.props.id}-sad`} name={this.props.id} />
      </fieldset>
    );
  }
}

EmotionSelect.propTypes = {
  legend: React.PropTypes.string.isRequired,
};
