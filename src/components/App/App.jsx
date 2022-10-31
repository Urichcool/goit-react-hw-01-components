import { Profile } from '../Profile/Profile';
import { Statistic } from '../Statistics/Statistics';
import { FriendsList } from '../FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import { MainContainer } from './App.styled'

import user from 'data/user.json';
import statistic from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';


export const App = () => {
  return (
    <MainContainer>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statistic} />
      <FriendsList friends={friends} />
      <TransactionHistory
      transactions={transactions}
      />
    </MainContainer>
  );
};
