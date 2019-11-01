import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.ul`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  list-style: none;
  padding: 0 15px;
`;

export const Item = styled.li`
  background-color: #fafafa;
  transition: transform 250ms ease, box-shadow 250ms ease;
  backface-visibility: hidden;

  &:hover {
    transform: scale(1.05) translateZ(0);
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.05);
  }
`;

export const Name = styled.h2`
  color: #333;
  font-size: 18px;
  font-weight: 600;
`;

export const AttributeList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Attribute = styled.p`
  color: #333;
  font-size: 13px;
  font-weight: 400;

  &:last-child {
    text-align: right;
  }
`;

export const DataContainer = styled(Link)`
  justify-content: space-between;
  border-bottom: 5px solid #e4e4e4;
  border-bottom-color: ${({ type }) => type};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  text-decoration: none;
`;
