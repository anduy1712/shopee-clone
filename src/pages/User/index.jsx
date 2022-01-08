import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Column from '../../components/Column';
import UserMenu from './UserMenu';
import Purchase from './Purchase';
import Profile from './Profile';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/reducers/usersSlice';

const User = () => {
  const { slug } = useParams();
  const history = useHistory();
    const {users} = useSelector(usersSelector);
  if (!users) {
    history.push('/');
  }
  return (
    <section className="main">
      <section className="account">
        <div className="grid wide">
          <div className="row">
            <Column c={0} m={3} l={2}>
              <UserMenu user={users} />
            </Column>
            <Column c={12} m={9} l={10}>
              {slug === 'purchase' && <Purchase />}
              {slug === 'profile' && <Profile user={users} />}
            </Column>
          </div>
        </div>
      </section>
    </section>
  );
};

export default User;
