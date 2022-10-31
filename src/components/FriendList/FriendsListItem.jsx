import PropTypes from 'prop-types';
import {
    FriendsListItemLi,
    FriendsListItemName
} from './FriendList.styled';


export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
      <FriendsListItemLi>
        <span></span>
        <img src={avatar} alt="User avatar" width="48" />
        <FriendsListItemName>{name}</FriendsListItemName>
      </FriendsListItemLi>
    );
}