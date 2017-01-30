import React from 'react';

let counter = 0;

export default class EmotionSelect extends React.Component {
  render() {
    return (
      <fieldset id={this.props.id}>
        <legend>{this.props.legend}</legend>
        <label htmlFor={`${this.props.id}-happy`}>:)</label>
        <input type="radio" id={`${this.props.id}-happy`} name={this.props.id} />
        <label htmlFor={`${this.props.id}-neutral`}>:|</label>
        <input type="radio" id={`${this.props.id}-neutral`} name={this.props.id} />
        <label htmlFor={`${this.props.id}-sad`}>:(</label>
        <input type="radio" id={`${this.props.id}-sad`} name={this.props.id} />
      </fieldset>
    );
  }
}

EmotionSelect.propTypes = {
  legend: React.PropTypes.string.isRequired,
};
