import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  border-radius: 5px;
  border: grey solid 2px;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #00bcd440;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const Image = styled.img`
  display: block;
  width: 200px;
`;

export const UserName = styled.p`
  margin-bottom: 0px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #122236;
`;
export const UserTag = styled.p`
  margin-bottom: 0px;
  margin-top: 10px;
  color: #565252;
`;
export const UserLocation = styled.p`
  margin-bottom: 0px;
  margin-top: 10px;
  color: #565252;
`;
export const StatsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0px;
  justify-content: center;
  list-style: none;
  background-color: #f3f6f9;
`;

export const StatsItem = styled.li`
  display: flex;
  border: 1px solid #72777e;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-basis: calc((100% - 2px) / 3);
`;
