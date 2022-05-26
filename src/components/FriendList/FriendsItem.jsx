import PropTypes from 'prop-types';
import { Item, Chip, Avatar, Name } from './FriendList.styled';

function FriendsItem(props) {
  const { online, avatar, name } = props;
  return (
    <Item>
      <Chip isOnline={online}>{online}</Chip>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendsItem.propTypes = {
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendsItem;
