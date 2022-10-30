import { Profile } from '../Profile/Profile';
import { Statistic } from '../Statistics/Statistics';
import user from 'user.json';
import statistic from 'data.json';

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
      <Statistic
        title = "Upload stats"
        stats={statistic}
        />
    </div>
  );
};
