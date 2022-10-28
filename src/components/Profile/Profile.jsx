import PropTypes from 'prop-types';
import {
  ProfileImg,
  ProfileName,
  ProfileStats,
  ProfileStatsItem,
  ProfileText,
  ProfileStatsText,
  ProfileStatsAmount
} from './Profile.styled';
import { ProfileContainer } from './Profile.styled';

export const Profile = ({ username, tag , location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileImg src={avatar} alt="User avatar" />
      <ProfileName>{username}</ProfileName>
      <ProfileText>{`@${tag}`}</ProfileText>
      <ProfileText>{location}</ProfileText>

      <ProfileStats>
        <ProfileStatsItem>
          <ProfileStatsText>Followers</ProfileStatsText>
          <ProfileStatsAmount>{stats.followers}</ProfileStatsAmount>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsText>Views</ProfileStatsText>
          <ProfileStatsAmount>{stats.views}</ProfileStatsAmount>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsText>Likes</ProfileStatsText>
          <ProfileStatsAmount>{stats.likes}</ProfileStatsAmount>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired
};
