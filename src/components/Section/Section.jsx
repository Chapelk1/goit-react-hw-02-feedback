import React,{Component} from 'react';
import { Container, Title } from 'components/Section/Section.styled';
import PropTypes from 'prop-types'

export class Section extends Component {


  render() {
    const { title, children} = this.props;
    return (
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
}