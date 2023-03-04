import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friends/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'components/json/user.json';
import data from 'components/json/data.json';
import friends from 'components/json/friends.json';
import transactions from 'components/json/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </>
  );
};
