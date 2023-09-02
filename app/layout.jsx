import { Menu } from '../components/Menu';
import './global.css';

export const metadata = {
  title: 'Главная страница',
  description: 'Generated by Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
