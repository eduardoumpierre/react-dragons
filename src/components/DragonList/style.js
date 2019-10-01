import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const Item = styled.li`
  background-color: #f7f7f7;
  width: 100%;

  &:nth-child(even) {
    background-color: #f1f1f1;
  }

  @media screen and (min-width: 425px) {
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    width: 33.333%;
  }

  @media screen and (min-width: 1024px) {
    width: 25%;
  }

  @media screen and (min-width: 1440px) {
    width: 20%;
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
  display: block;
  text-decoration: none;
  padding: 20px;
`;
