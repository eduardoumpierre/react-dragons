import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Content, Title, Button } from './style';

const Header = ({ title, backButton, history }) => (
  <Container>
    <Content>
      {backButton && <Button onClick={() => history.goBack()}>Voltar</Button>}
    </Content>
    <Title>{title}</Title>
    <Content></Content>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string,
  backButton: PropTypes.bool,
  history: PropTypes.any.isRequired,
};

Header.defaultProps = {
  title: 'Dragons',
  backButton: true,
};

export default withRouter(Header);
