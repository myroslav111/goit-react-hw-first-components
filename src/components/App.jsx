import user from './user';

import Section from './Section';
import Profile from './Profile';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Профиль социальной сети">
        <Profile  username={user.username}
                  tag={user.tag}
                  location={user.location}
                  avatar={user.avatar}
                  followers={user.stats.followers}
                  views={user.stats.views}
                  likes={user.stats.likes}  />
      </Section>
    </div>
  );
};
