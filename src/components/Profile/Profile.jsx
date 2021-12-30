import PropTypes from 'prop-types';
import { ContainerProfile, Description, Avatar, UserName, UserInfo, Stats, StatsItem, Quantity } from './Profile.styled';

export function Profile({ userName, tag, location, avatar, stats }) {
  return (
    <ContainerProfile>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{userName}</UserName>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <Stats>
        <StatsItem color="#8f789f">
          <span>Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem color="#99ccff">
          <span>Views</span>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem color="#f9da5e">
          <span>Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ContainerProfile>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
