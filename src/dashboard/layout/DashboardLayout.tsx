import { FC, ReactNode } from 'react';
import { Navbar, SideMenu } from '../components';

interface Props {
  children: ReactNode;
}

export const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      {/* //TODO: Sidebar */}
      <SideMenu />
      <main
        style={{
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0px 30px',
        }}
      >
        {children}
      </main>
      <footer>{/* //TODO: Footer */}</footer>
    </>
  );
};
