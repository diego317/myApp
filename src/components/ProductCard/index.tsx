import clsx from 'clsx';
import React from 'react';

import { Product } from '@constants/types';

import styles from './styles.module.scss';

type ProductCardProps = Omit<Product, 'id' | 'category'>;

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  imageURL,
  inStock,
}) => {
  return (
    <div className={clsx('column', styles.card)}>
      <img src={imageURL} alt={name} />
      <h3 className="title-big bold m-top-1">{name}</h3>
      <p className="text-big">{description}</p>
      <p
        className={clsx('text-normal', {
          [styles.available]: inStock,
          [styles.unavailable]: !inStock,
        })}
      >
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <p className="text-normal italic">${price}</p>
      <button type="button" disabled={!inStock}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
