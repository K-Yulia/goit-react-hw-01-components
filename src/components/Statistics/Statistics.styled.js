import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  width: 300px;
  border-radius: 5px;
  border: grey solid 2px;
  font-size: 20px;
  margin-bottom: 30px;
  /* background-color: #be184fad; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticsTitle = styled.h2`
  background-color: #be184fad;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 15px 0;
`;

export const StatisticsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #72777e;
  /* border-radius: 5px; */
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  padding: 10px 5px;
  background-color: ${randomBgColor};
`;
function randomBgColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
