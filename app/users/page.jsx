// 'use client';
// import { useState, useEffect } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Users Page',
  keywords: 'nextjs, react'
};

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await response.json();

  return data;
};

const Users = async () => {
  const data = await fetchUsers();
  // const [users, setUsers] = useState([
  //   { id: 1, name: 'Игорь' },
  //   { id: 2, name: 'Тихон' },
  //   { id: 3, name: 'Макс' }
  // ]);

  // useEffect(async () => {
  //   // const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //   // const data = await response.json();

  //   setUsers(data);
  // }, []);

  return (
    <div>
      <h1>Список пользователей</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
