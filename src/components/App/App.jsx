import { Profile } from '../Profile/Profile';
import { Statistic } from '../Statistics/Statistics';
import { FriendsList } from '../FriendList/FriendList';
import { FriendsListItem } from '../FriendList/FriendsListItem';
import user from 'user.json';
import statistic from 'data.json';
import friends from 'friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statistic} />
      <FriendsList
        friends={friends}
      />
    </div>
  );
};
