import PropTypes from 'prop-types';
import {
  Wrapper,
  Description,
  Image,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <Description>
        <Image src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <UserTag className="tag">@{tag}</UserTag>
        <UserLocation className="location">{location}</UserLocation>
      </Description>

      <StatsList className="stats">
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatsItem>
      </StatsList>
    </Wrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
