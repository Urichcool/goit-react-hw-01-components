import styled from '@emotion/styled';
 

export const TransactionHistoryContainer = styled.table`
  background-color: #f8f8f8;
  width: 750px;
  margin-top:60px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const TransactionHistoryHeadItem = styled.tr`
  background-color: #57e3fc;
  height: 50px;
`;

export const TransactionHistoryHeadText = styled.th`
  width: 250px;
  color: white;
`;

export const TransactionHistoryBodyItemLine = styled.tr`
text-align: center;
height: 50px;
 background-color: ${props => {
    if (props.transactionNumber % 2 === 0) {
      return '#D3D3D3;';
  };
 return '#f0eeee;';
  }};
`


export const TransactionHistoryBodyItemText = styled.td`
  font-size: 18px;
`;
