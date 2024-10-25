import { CategoryKey } from '@constants/enums';
import { Product } from '@constants/types';

import books from '../assets/books.jpg';
import clothes from '../assets/clothes.jpg';
import furniture from '../assets/furniture.jpg';
import pc from '../assets/pc.jpg';
import toys from '../assets/toys.jpeg';

const categories: CategoryKey[] = Object.values(CategoryKey);

const imageURLs: Record<CategoryKey, string> = {
  Books: books,
  Clothing: clothes,
  Furniture: furniture,
  Electronics: pc,
  Toys: toys,
};

export const generateProducts = (count: number): Product[] => {
  const products: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const randomPrice = Math.floor(Math.random() * 500) + 1;
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const inStock = Math.random() > 0.5;

    products.push({
      id: i,
      name: `Product ${i}`,
      description: `Description for Product ${i}`,
      price: randomPrice,
      category: randomCategory,
      inStock: inStock,
      imageURL: imageURLs[randomCategory],
    });
  }

  return products;
};
