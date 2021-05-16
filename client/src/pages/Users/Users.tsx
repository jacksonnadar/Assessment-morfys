import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  getAllUsers,
  UsersInterface,
} from '../../assets/components/Form/apicalls';

interface Props {}

const Users: React.FC<Props> = () => {
  let [users, setUsers] = useState<UsersInterface | null>();
  useEffect(() => {
    (async () => {
      const result = await getAllUsers();
      setUsers(result);
    })();
  });
  return (
    <div className="Users">
      <p>{JSON.stringify(users)}</p>
    </div>
  );
};

export default Users;
