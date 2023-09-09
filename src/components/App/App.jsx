import React, {Component} from "react"
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateValueHandler = e => {
    const { textContent } = e.currentTarget;
    this.setState(prevState => {
      return { [textContent]: prevState[textContent] + 1 };
    });
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return (good + neutral + bad)
  };

  countPositiveFeedbackPercentage = () => {
    const result = ((this.state.good / this.countTotalFeedback()) * 100)
    if (!result) {
      return 0;
    }
    return Math.floor(result);
  };

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.stateValueHandler}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}