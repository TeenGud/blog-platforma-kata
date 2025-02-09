import { Outlet } from 'react-router-dom';

import { Header } from './ui/Header';

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
