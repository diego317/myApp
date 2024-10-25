import clsx from 'clsx';
import React, { useState } from 'react';

import Filters from '@components/Filters';
import ProductCard from '@components/ProductCard';
import { filterOptions } from '@constants/types';
import { generateProducts } from '@utilities/generateProducts';

import styles from './styles.module.scss';

const productsList = generateProducts(20);
const Products: React.FC = () => {
  const [products, setProducts] = useState(() =>
    productsList.sort((a, b) => a.price - b.price)
  );

  const handleFilterChange = (filters: filterOptions) => {
    const filteredProducts = productsList
      .filter((product) => {
        const { price, category, inStock } = product;
        if (filters.category !== 'all' && filters.category !== category) {
          return false;
        }
        if (filters.inStock !== undefined && filters.inStock !== inStock) {
          return false;
        }
        if (price < filters.price[0] || price > filters.price[1]) {
          return false;
        }
        return true;
      })
      .sort((a, b) =>
        filters.sort === 'asc' ? a.price - b.price : b.price - a.price
      );
    setProducts(filteredProducts);
  };

  return (
    <div className={clsx(styles.container, 'column')}>
      <Filters onFilterChange={handleFilterChange} />
      <section className={clsx('row wrap center', styles.content)}>
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
      </section>
    </div>
  );
};

export default Products;
