import user from './Profile-user/user';

import Section from './Section';
import Profile from './Profile-user/Profile';
import { Container } from './App.styled';
// import { CardProfile } from './Profile-user/Profile.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </Container>
  );
};
