import Link from 'next/link';
import styles from './Menu.module.css';

export const Menu = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.link}>
        Главная
      </Link>
      <Link href="/users" className={styles.link}>
        Пользователи
      </Link>
    </div>
  );
};
