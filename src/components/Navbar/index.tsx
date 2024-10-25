import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={clsx(styles.nav, 'row', 'middle')}>
      <ul className="text-big">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
