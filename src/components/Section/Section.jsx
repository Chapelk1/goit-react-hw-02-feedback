import { Container, Title } from 'components/Section/Section.styled';

export const Section = (props) => {
    return (
      <Container>
        <Title>{props.title}</Title>
      </Container>
    );
}