import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getDragon } from '../../services/dragons';
import Header from '../../components/Header';
import { Container, Data, Title, Value } from './style';

const Detail = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dragon, setDragon] = useState(null);

  useEffect(() => {
    async function fetchDragon() {
      const { params } = match;
      const response = await getDragon(params.id);

      setDragon(response.data);
      setIsLoading(false);
    }

    fetchDragon();
  }, [match]);

  return (
    <>
      <Header title="Dragon" />

      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <Container>
          <Data>
            <Title>ID</Title>
            <Value>{dragon.id}</Value>
          </Data>
          <Data>
            <Title>Nome</Title>
            <Value>{dragon.name}</Value>
          </Data>
          <Data>
            <Title>Tipo</Title>
            <Value>{dragon.type}</Value>
          </Data>
          <Data>
            <Title>Criado em</Title>
            <Value>{dragon.createdAt}</Value>
          </Data>
        </Container>
      )}
    </>
  );
};

Detail.propTypes = {
  match: PropTypes.any.isRequired,
};

export default withRouter(Detail);
