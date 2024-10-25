import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@components/Navbar';

import styles from './styles.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
