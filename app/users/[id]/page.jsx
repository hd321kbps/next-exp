// 'use client';
// import { useParams } from 'next/navigation';

import styles from './User.module.scss';

const fetchUsers = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const data = await response.json();

  return data;
};

// const User = async () => {
const User = async ({ params }) => {
  const data = await fetchUsers(params.id);
  // const params = useParams();
  // console.log(params);

  return (
    <div className={styles.user}>
      {/* <h1>Пользователь {params.id}</h1> */}
      <h1>Пользователь {data.id}</h1>
      <div>Имя пользователя: {data.name}</div>
    </div>
  );
};

export default User;
