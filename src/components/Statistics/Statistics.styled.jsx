import styled from '@emotion/styled';

function getRandomRgba() {
  const o = Math.round,
    r = Math.random,
    s = 255;
  return (
    'rgba(' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    r().toFixed(1) +
    ')'
  );
}

export const StatisticContainer = styled.section`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width:300px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const StatisticTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  
`;

export const StatisticText = styled.span`
 color: white;
  font-size: 16px;
  font-weight: 500;
`;

export const Statisticpercentage = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export const StatisticList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  border-top: solid 1px #e2e1e1;
`;

export const StatisticListItem = styled.li`
  background-color: ${getRandomRgba};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: solid 1px #e2e1e1;
  width: 100%;
  height: 70px;
  &&:last-child {
    border: none;
  }
`;