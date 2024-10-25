import clsx from 'clsx';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { ImList } from 'react-icons/im';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={clsx(styles.nav, 'row', 'middle')}>
      <ul className="text-big">
        <li>
          <Link to="/">
            <FaHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/products">
            <ImList /> Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
