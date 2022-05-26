import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem';
import { FriendsList } from './FriendList.styled';

function FriendList({ friendsData }) {
  return (
    <FriendsList>
      {friendsData.map(friend => (
        <FriendsItem
          key={friend.id}
          online={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
        // <li key={friend.id} class="item">
        //   <span class="status">{friend.isOnline}</span>
        //   <img
        //     class="avatar"
        //     src={friend.avatar}
        //     alt="User avatar"
        //     width="48"
        //   />
        //   <p class="name">{friend.name}</p>
        // </li>
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default FriendList;
