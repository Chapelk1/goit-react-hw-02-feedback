import React, {Component} from "react"
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  stateValueHandler = (e) => {
    const { textContent } = e.currentTarget;
  

    this.setState(prevState => {
      return { [textContent]: prevState[textContent] + 1 };
    })
  }

  render() {
    return (
      <Section
        title="Please leave feedback"
        options={this.state}
        handlValue={this.stateValueHandler }
      />
    );
    }
}