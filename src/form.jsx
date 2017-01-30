import React from 'react';

import EmotionSelect from './emotion-select.jsx';
import InputList from './input-list.jsx';

const emptyWeeklyGoal = { done: false, value: '' };
const emptyBad = { value: '' };
const emptyGood = { value: '' };
const emptyNeutral = { value: '' };

const fixtures = {
  weeklyGoals: [
    { done: true, value: 'hello world' },
    { done: false, value: 'hola mundo' },
  ],
  bad: [{ value: 'booo' }, { value: 'waaah' }],
  good: [{ value: 'weee' }, { value: 'zweee' }],
  neutral: [{ value: 'whomp whopm whomp whpom' }, { value: 'piiiu' }],
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weeklyGoals: fixtures.weeklyGoals.concat(emptyWeeklyGoal),
      bad: fixtures.bad.concat(emptyBad),
      good: fixtures.good.concat(emptyGood),
      neutral: fixtures.neutral.concat(emptyNeutral),
    };

    this.onInputListChange = this.onInputListChange.bind(this);
  }

  onInputListChange(stateKey, empty, index, event) {
    const list = this.state[stateKey];
    const item = list[index];

    this.setState({
      [stateKey]: list
        .map((listItem, i) => i === index ? Object.assign({}, listItem, { value: event.target.value }) : listItem)
        .filter((item) => item.value)
        .concat(empty),
    });
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
