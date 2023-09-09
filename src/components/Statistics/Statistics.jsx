import React, {Component} from "react"
import { Paragraph, Title } from './Statistics.styled';


export class Statistics extends Component {
  

  render() {
    return (
      <div>
        <Title>Statistics</Title>
        <Paragraph>Good: {this.props.good}</Paragraph>
        <Paragraph>Neutral: {this.props.neutral}</Paragraph>
        <Paragraph>Bad: {this.props.bad}</Paragraph>
        <Paragraph>Total: {this.props.total}</Paragraph>
        <Paragraph>PositivePercentage: {this.props.positivePercentage}%</Paragraph>
      </div>
    );
  }
}