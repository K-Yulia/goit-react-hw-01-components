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

export const Profile = ({ user }) => {
  return (
    <Wrapper>
      <Description>
        <Image src={user.avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{user.username}</UserName>
        <UserTag className="tag">@{user.tag}</UserTag>
        <UserLocation className="location">{user.location}</UserLocation>
      </Description>

      <StatsList className="stats">
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </StatsItem>
      </StatsList>
    </Wrapper>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

// import PropTypes from 'prop-types';
// import {
//   ProfileWrapper,
//   StatsList,
//   StatsItem,
//   Descr,
//   Image,
// } from './Profile.styled';

// export const Profile = ({ user }) => {
//   return (
//     <ProfileWrapper>
//       <Descr>
//         <Image src={user.avatar} alt="User avatar" class="avatar"></Image>
//         <p class="name">{user.username}</p>
//         <p class="tag">{user.tag}</p>
//         <p class="location">{user.location}</p>
//       </Descr>

//       <StatsList>
//         <StatsItem>
//           <span class="label">Followers</span>
//           <span class="quantity">{user.stats.followers}</span>
//         </StatsItem>
//         <StatsItem>
//           <span class="label">Views</span>
//           <span class="quantity">{user.stats.views}</span>
//         </StatsItem>
//         <StatsItem>
//           <span class="label">Likes</span>
//           <span class="quantity">{user.stats.likes}</span>
//         </StatsItem>
//       </StatsList>
//     </ProfileWrapper>
//   );
// };

// Profile.propTypes = {
//   user: PropTypes.shape({
//     avatar: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     stats: PropTypes.shape({
//       followers: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       likes: PropTypes.number.isRequired,
//     }),
//   }),
// };
