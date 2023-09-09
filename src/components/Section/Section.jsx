import React,{Component} from 'react';
import { Container, Title } from 'components/Section/Section.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'
import {Statistics} from 'components/Statistics/Statistics'


export class Section extends Component {

  countTotalFeedback = () => {
    const values = Object.values(this.props.options);
    return values.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const result = Math.floor(
      (this.props.options.good / this.countTotalFeedback()) * 100,
    );
    if (!result) {
      return 0;
    } 
    return result
  };

  render() {
    const { title, options, handlValue } = this.props;
    const { good, neutral, bad } = options;
    return (
      <Container>
        <Title>{title}</Title>
        <FeedbackOptions options={options} handlClick={handlValue} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}