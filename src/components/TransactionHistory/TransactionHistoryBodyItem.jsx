import PropTypes from 'prop-types';

import {
     TransactionHistoryBodyItemLine,
     TransactionHistoryBodyItemText
} from './TransactionHistory.styled';


export const TransactionHistoryBodyItem = ({ type, amount, currency, transactionNumber }) => {
  return (
    <TransactionHistoryBodyItemLine transactionNumber={transactionNumber}>
      <TransactionHistoryBodyItemText transactionNumber={transactionNumber}>
        {type}
      </TransactionHistoryBodyItemText>
      <TransactionHistoryBodyItemText transactionNumber={transactionNumber}>
        {amount}
      </TransactionHistoryBodyItemText>
      <TransactionHistoryBodyItemText transactionNumber={transactionNumber}>
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