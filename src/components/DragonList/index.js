import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Container,
  Item,
  Name,
  AttributeList,
  Attribute,
  DataContainer,
} from './style';
import { getRoute, ROUTES } from '../../config/constants';

const DragonList = ({ items }) => (
  <Container>
    {items.map(item => (
      <Item key={item.id}>
        <DataContainer to={getRoute(ROUTES.DETAIL, { id: item.id })}>
          <AttributeList>
            <Attribute title="Type">{item.type}</Attribute>
            <Attribute title="Created at">{item.createdAt}</Attribute>
          </AttributeList>
          <Name>{item.name}</Name>
        </DataContainer>
      </Item>
    ))}
  </Container>
);

DragonList.propTypes = {
  items: PropTypes.array.isRequired,
};

DragonList.defaultProps = {
  items: [],
};

export default DragonList;
