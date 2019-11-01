import React from 'react';
import { PropTypes } from 'prop-types';
import dayjs from 'dayjs';
import { Container, Item, Name, AttributeList, Attribute, DataContainer } from './style';
import { getRoute, ROUTES } from '../../config/constants';

const DragonList = ({ items }) => (
  <Container>
    {items.map(item => (
      <Item key={item.id}>
        <DataContainer to={getRoute(ROUTES.DETAIL, { id: item.id })} type={item.type}>
          <AttributeList>
            <Attribute title="Type">{item.type}</Attribute>
            <Attribute title="Created at">
              {dayjs(item.createdAt).format('DD/MM/YYYY HH:mm:ss')}
            </Attribute>
          </AttributeList>
          <Name>{item.name}</Name>
        </DataContainer>
      </Item>
    ))}
  </Container>
);

DragonList.propTypes = {
  items: PropTypes.array,
};

DragonList.defaultProps = {
  items: [],
};

export default DragonList;
