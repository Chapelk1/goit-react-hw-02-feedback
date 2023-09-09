import React, {Component} from "react"
import { Paragraph,} from './Statistics.styled';
import PropTypes from 'prop-types'

export class Statistics extends Component {
  

  render() {
    const {good, neutral, bad, total, positivePercentage} = this.props
    return (
      <div>
        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: {neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
        <Paragraph>Total: {total}</Paragraph>
        <Paragraph>PositivePercentage: {positivePercentage}%</Paragraph>
      </div>
    );
  }
}


Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}