import PropTypes from 'prop-types';
import {
  CardProfile,
  UserDescription,
  Img,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
  ItemStats,
} from './Profile.styled';

function Profile(props) {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return (
    <CardProfile>
      <UserDescription>
        <Img src={avatar} alt="User avatar" />

        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </UserDescription>
      <Stats>
        <ItemStats>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ItemStats>
        <ItemStats>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ItemStats>
        <ItemStats>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ItemStats>
      </Stats>
    </CardProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  // stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
