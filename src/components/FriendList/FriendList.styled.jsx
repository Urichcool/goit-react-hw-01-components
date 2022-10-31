import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const FriendsListContainer = styled.ul`
  background-color: #f8f8f8;
  margin-top: 60px;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  padding: 0;
`;

export const FriendsListItemLi = styled.li`
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  width: 100%;
  height:70px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
    border-radius:4px;
  &&:last-child {
    margin-bottom: 0;
  }
`;

export const FriendsListItemName = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  margin-left: 10px;
`;

export const FriendsListItemStatus = styled.span`
  border-radius:50%;
  width: 12px;
  height: 12px;
  margin-left:10px;
  margin-right: 10px;
  background-color: ${props => { 
  if (props.type === 'true') {
    return 'green;';
  }
  else {
    return 'red'
  }
  }};
`;
FriendsListItemStatus.propTypes = {
  type: PropTypes.string.isRequired
};