import PropTypes from 'prop-types';
import {
    FriendsListItemLi,
  FriendsListItemName,
    FriendsListItemStatus
} from './FriendList.styled';


export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
      <FriendsListItemLi>
        <FriendsListItemStatus status={isOnline.toString()} />
        <img src={avatar} alt="User avatar" width="48" />
        <FriendsListItemName>{name}</FriendsListItemName>
      </FriendsListItemLi>
    );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};