import { Outlet } from 'react-router-dom';
import { Navbar, SideMenu } from '../components';

export const DashboardLayout = () => {
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
        <Outlet />
      </main>
    </>
  );
};
