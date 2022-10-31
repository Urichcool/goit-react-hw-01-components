import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import { FriendsListContainer } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
    return (
      <FriendsListContainer>
        {friends.map(friend => (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </FriendsListContainer>
    );
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired
};