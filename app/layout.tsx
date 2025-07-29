import './styles/globals.css';
import StoreProvider from './StoreProvider';

export const metadata = {
  title: 'Redux Thunk Quotes App',
  description: 'Fetching quotes using Redux Toolkit Thunk',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
