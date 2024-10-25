import clsx from 'clsx';
import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import RangeSlider from 'react-range-slider-input';
import Select from 'react-select';
import 'react-range-slider-input/dist/style.css';

import { CategoryKey } from '@constants/enums';
import { filterOptions } from '@constants/types';

import styles from './styles.module.scss';

type FiltersProps = {
  onFilterChange: (filters: filterOptions) => void;
};

const categoryOptions = ['all', ...Object.values(CategoryKey)].map(
  (category) => ({
    value: category,
    label: category,
  })
);

const sortOptions = [
  { value: 'asc', label: 'Price: Low to High' },
  { value: 'desc', label: 'Price: High to Low' },
];

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<filterOptions>({
    price: [0, 500],
    category: categoryOptions[0].value,
    inStock: undefined,
    sort: 'asc',
  });

  const handleChange = (key: string, value: unknown) => {
    if (key === 'price') {
      value = value as [number, number];
    }
    if (key === 'category') {
      value = value as string;
    }
    if (key === 'inStock') {
      value = value as boolean;
    }
    if (key === 'sort') {
      value = value as 'asc' | 'desc';
    }
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className={clsx('text-normal', styles.container)}>
      <div className="column middle">
        <label className="m-bottom-2">
          Price Range: ${filters.price.join(' - ')}
        </label>
        <RangeSlider
          min="0"
          max="500"
          defaultValue={[0, 500]}
          value={filters.price}
          onInput={([min, max]: [number, number]) =>
            handleChange('price', [min, max])
          }
        />
      </div>
      <div className="row space-between middle text-normal">
        <label className="m-right-2">Category:</label>
        <Select
          options={categoryOptions}
          defaultValue={categoryOptions[0]}
          onChange={(option) =>
            handleChange('category', option?.value || 'all')
          }
        />
      </div>
      <div className="row space-between middle text-normal">
        <label className="m-right-2">In Stock:</label>
        <input
          type="checkbox"
          name="inStock"
          checked={filters.inStock}
          onChange={(e) => handleChange('inStock', e.target.checked)}
        />
      </div>
      <div className="row space-between middle text-normal">
        <label className="m-right-2">Sort by:</label>
        <Select
          options={sortOptions}
          defaultValue={sortOptions[0]}
          onChange={(option) => handleChange('sort', option?.value || 'asc')}
        />
      </div>
    </div>
  );
};

export default Filters;
