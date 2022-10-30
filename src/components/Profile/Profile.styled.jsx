import styled from "@emotion/styled";


export const ProfileContainer = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const ProfileImg = styled.img`
margin-top: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #e2e1e1;
`;

export const ProfileName = styled.p`
  font-size:24px; 
  font-weight:600; 
  margin-bottom: 13px;
`;

export const ProfileText = styled.p`
  color: gray;
  font-size:16px;
`;

export const ProfileStatsText = styled.span`
  color: gray;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ProfileStatsAmount = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const ProfileStats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  width:100%;
  background-color: #eef3f8;
  border-top: solid 1px #e2e1e1;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: solid 1px #e2e1e1;
  width: 100%;
  height: 90px;
  &&:last-child {
    border: none;
  }
`;