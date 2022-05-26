import PropTypes from 'prop-types';
import { Item, Indicator, Avatar, Name } from './FriendList.styled';

function FriendsItem(props) {
  const { online, avatar, name } = props;
  return (
    <Item>
      <Indicator>{online}</Indicator>
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
