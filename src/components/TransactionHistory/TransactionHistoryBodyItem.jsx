import PropTypes from 'prop-types';

import {
     TransactionHistoryBodyItemLine,
     TransactionHistoryBodyItemText
} from './TransactionHistory.styled';


export const TransactionHistoryBodyItem = ({ type, amount, currency, transactionNumber }) => {
  return (
    <TransactionHistoryBodyItemLine transactionNumber={transactionNumber}>
      <TransactionHistoryBodyItemText>
        {type}
      </TransactionHistoryBodyItemText>
      <TransactionHistoryBodyItemText>
        {amount}
      </TransactionHistoryBodyItemText>
      <TransactionHistoryBodyItemText>
        {currency}
      </TransactionHistoryBodyItemText>
    </TransactionHistoryBodyItemLine>
  );
    
};

TransactionHistoryBodyItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  transactionNumber: PropTypes.number.isRequired
};