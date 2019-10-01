import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: calc(100vh - 64px);
  width: 100vw;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Data = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  height: 25%;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    &:nth-child(odd) {
      background-color: #f7f7f7;
    }
  }

  @media screen and (min-width: 768px) {
    height: 50%;
    width: 50%;

    &:nth-child(2),
    &:nth-child(3) {
      background-color: #f7f7f7;
    }
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 2px;
  text-transform: uppercase;
`;

export const Value = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
