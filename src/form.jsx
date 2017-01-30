import React from 'react';

import EmotionSelect from './emotion-select.jsx';
import InputList from './input-list.jsx';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weeklyGoals: [{
        done: true,
        value: 'hello world',
      }, {
        done: false,
        value: 'hola mundo',
      }],
    };

    this.onWeeklyGoalChange = this.onWeeklyGoalChange.bind(this);
  }

  onWeeklyGoalChange(index, event) {
    const goal = this.state.weeklyGoals[index];
    const updateGoal = (goal, i) => i === index ? Object.assign({}, goal, { value: event.target.value }) : goal;

    this.setState({
      weeklyGoals: this.state.weeklyGoals.map(updateGoal),
    });
  }

  render() {
    return (
      <form>
        <InputList
          legend="Weekly Goals"
          onChange={this.onWeeklyGoalChange}
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
