import styled from 'styled-components';

export const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #b7e1eb;
  }
  &:nth-of-type(even) {
    background-color: #00bcd4;
  }
`;
export const Item = styled.td`
  border-collapse: collapse;
  font-size: 18px;
  border: 2px solid grey;
  padding: 10px 0;
  text-align: center;
`;
