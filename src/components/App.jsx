import user from './Profile-user/user';
import data from './Statistics/data';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions';
import Profile from './Profile-user/Profile';
import SectionStatistic from './Statistics/Section-statistic';
import Statistic from './Statistics/Statistic';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { Container } from './App.styled';
console.log(transactions);

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

      <FriendList friendsData={friends} />

      <TransactionHistory history={transactions} />
    </Container>
  );
};
