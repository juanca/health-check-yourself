import React from 'react';

import EmotionSelect from './emotion-select.jsx';
import InputList from './input-list.jsx';

const emptyWeeklyGoal = {
  done: false,
  value: '',
};

const fixtures = {
  weeklyGoals: [
    { done: true, value: 'hello world' },
    { done: false, value: 'hola mundo' },
  ],
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weeklyGoals: fixtures.weeklyGoals.concat(emptyWeeklyGoal),
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
          onChange={() => {}}
          placeholder="1 bad stuff"
          values={[{ value: 'booo' }, { value: 'waaah' }]}
        />

        <InputList
          legend="Good stuff"
          onChange={() => {}}
          placeholder="1 good stuff"
          values={[{ value: 'weee' }, { value: 'zweee' }]}
        />

        <InputList
          legend="Other stuff"
          onChange={() => {}}
          placeholder="1 other stuff"
          values={[{ value: 'whomp whopm whomp whpom' }, { value: 'piiiu' }]}
        />

        <button type="submit">Save!</button>
      </form>
    );
  }
}
