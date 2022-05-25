import user from './Profile-user/user';
import Profile from './Profile-user/Profile';
import { Container } from './App.styled';
import SectionStatistic from './Statistics/Section-statistic';
import Statistic from './Statistics/Statistic';
import data from './Statistics/data';

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

      <SectionStatistic title={'Upload stats'}>
        <Statistic statistic={data} />
      </SectionStatistic>
    </Container>
  );
};
