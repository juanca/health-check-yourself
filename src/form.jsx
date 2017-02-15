import React from 'react';

import EmotionSelect from './components/emotion-select.jsx';
import InputList from './form-input-list.jsx';

const API = {
  weeklyGoals: React.PropTypes.array.isRequired,
  bad: React.PropTypes.array.isRequired,
  good: React.PropTypes.array.isRequired,
  neutral: React.PropTypes.array.isRequired,
  onInputListChange: React.PropTypes.func.isRequired,
};

const emptyWeeklyGoal = { done: false, value: '' };
const emptyBad = { value: '' };
const emptyGood = { value: '' };
const emptyNeutral = { value: '' };


export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weeklyGoals: props.weeklyGoals.concat(emptyWeeklyGoal),
      bad: props.bad.concat(emptyBad),
      good: props.good.concat(emptyGood),
      neutral: props.neutral.concat(emptyNeutral),
    };

    this.onInputListChange = this.onInputListChange.bind(this);
  }

  onInputListChange(stateKey, empty, index, event) {
    const list = this.state[stateKey];
    const item = list[index];
    const newList = list
      .map((listItem, i) =>
        i === index ?
        Object.assign({}, listItem, { value: event.target.value })
        : listItem
      )
      .filter((item) => item.value);
    this.setState({ [stateKey]: newList.concat(empty) });
    this.props.onInputListChange(stateKey, newList);
  }

  render() {
    return (
      <form>
        <InputList
          legend="Weekly Goals"
          onChange={this.onInputListChange.bind(this, 'weeklyGoals', emptyWeeklyGoal)}
          placeholder="Accomplish by next week."
          values={this.state.weeklyGoals}
        />

        <EmotionSelect id="work-emotion" legend="Overall work day" />

        <EmotionSelect id="day-emotion" legend="Overall day" />

        <InputList
          legend="Bad stuff"
          onChange={this.onInputListChange.bind(this, 'bad', emptyBad)}
          placeholder="1 bad stuff"
          values={this.state.bad}
        />

        <InputList
          legend="Good stuff"
          onChange={this.onInputListChange.bind(this, 'good', emptyGood)}
          placeholder="1 good stuff"
          values={this.state.good}
        />

        <InputList
          legend="Other stuff"
          onChange={this.onInputListChange.bind(this, 'neutral', emptyNeutral)}
          placeholder="1 other stuff"
          values={this.state.neutral}
        />

        <button type="submit">Save!</button>
      </form>
    );
  }
}

Form.propTypes = API;
