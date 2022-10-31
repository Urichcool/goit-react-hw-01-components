import PropTypes from 'prop-types';

import {
  TransactionHistoryContainer,
  TransactionHistoryHeadItem,
  TransactionHistoryHeadText,
} from './TransactionHistory.styled';
import { TransactionHistoryBodyItem } from './TransactionHistoryBodyItem';


export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryContainer>
      <thead>
        <TransactionHistoryHeadItem>
          <TransactionHistoryHeadText>Type</TransactionHistoryHeadText>
          <TransactionHistoryHeadText>Amount</TransactionHistoryHeadText>
          <TransactionHistoryHeadText>Currency</TransactionHistoryHeadText>
        </TransactionHistoryHeadItem>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionHistoryBodyItem
            transactionNumber={transactions.indexOf(transaction) + 1}
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </TransactionHistoryContainer>
  );
   
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};