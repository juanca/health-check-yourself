import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label for="goals">(Weekly) Goals:</label>
          <input type="text" id="goals" name="goals" />
        </fieldset>

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

        <fieldset>
          <label for="bothering">Something(s) that bothered you (to make sure it doesn’t bother you later):</label>
          <input type="text" id="bothering" name="bothering" />
        </fieldset>

        <fieldset>
          <label for="pleasing">Something that made me feel good (to make sure I keep doing it):</label>
          <input type="text" id="pleasing" name="pleasing" />
        </fieldset>

        <fieldset>
          <label for="on-your-mind">Anything else on your mind:</label>
          <textarea type="text" id="on-your-mind" name="on-your-mind" />
        </fieldset>

        <button type="submit">Save!</button>
      </form>
    );
  }
}
