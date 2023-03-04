import PropTypes from 'prop-types';
import { ListItem, Status, Avatar, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <ListItem className="item">
      <Status isOnline={isOnline}></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName className="name">{name}</FriendName>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
