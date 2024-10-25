import clsx from 'clsx';
import React from 'react';

import ProductCard from '@components/ProductCard';
import { generateProducts } from '@utilities/generateProducts';

import styles from './styles.module.scss';

const Products: React.FC = () => {
  const products = generateProducts(20);

  return (
    <div className={clsx('row wrap', styles.container)}>
      {products.map(({ id, name, description, price, inStock, imageURL }) => (
        <ProductCard
          key={id}
          name={name}
          description={description}
          price={price}
          imageURL={imageURL}
          inStock={inStock}
        />
      ))}
    </div>
  );
};

export default Products;
