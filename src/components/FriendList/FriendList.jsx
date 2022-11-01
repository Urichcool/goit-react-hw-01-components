import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import { FriendsListContainer } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
    return (
      <FriendsListContainer>
        {friends.map(({id, avatar, name, isOnline}) => (
          <FriendsListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendsListContainer>
    );
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired
};