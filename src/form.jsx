import React from 'react';

import InputList from './input-list.jsx';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <InputList
          legend="Weekly Goals"
          placeholder="Accomplish by next week."
          values={['hello world', 'hola mundo']}
        />

        <fieldset id="work-emotion">
          Overall work day emotion:
          <label for="work-emotion-happy">:)</label>
          <input type="radio" id="work-emotion-happy" name="work-emotion" />
          <label for="work-emotion-neutral">:|</label>
          <input type="radio" id="work-emotion-neutral" name="work-emotion" />
          <label for="work-emotion-sad">:(</label>
          <input type="radio" id="work-emotion-sad" name="work-emotion" />
        </fieldset>

        <fieldset id="day-emotion">
          Overall non-work day emotion:
          <label for="day-emotion-happy">:)</label>
          <input type="radio" id="day-emotion-happy" name="day-emotion" />
          <label for="day-emotion-neutral">:|</label>
          <input type="radio" id="day-emotion-neutral" name="day-emotion" />
          <label for="day-emotion-sad">:(</label>
          <input type="radio" id="day-emotion-sad" name="day-emotion" />
        </fieldset>

        <InputList
          legend="Bad stuff"
          placeholder="1 bad stuff"
          values={['booo', 'waaah']}
        />

        <InputList
          legend="Good stuff"
          placeholder="1 good stuff"
          values={['weee', 'zweee']}
        />

        <InputList
          legend="Other stuff"
          placeholder="1 other stuff"
          values={['whomp whopm whomp whpom', 'piiiu']}
        />

        <button type="submit">Save!</button>
      </form>
    );
  }
}
