# MyApp - Product Listing Page

## Overview

MyApp is a React application that displays a list of products in card format. Users can filter products by various criteria, including price range, category, and availability. This project utilizes Vite as the build tool, TypeScript for type safety, and SASS for styling.

## Features

- **Responsive Design**: The product listing page adapts to various screen sizes.
- **Product Filtering**: Users can filter products by:
  - Price Range
  - Category
  - Availability (in stock)
- **Sorting**: Products can be sorted by price in ascending or descending order.

## Technologies Used

- **React**: Component-based UI.
- **Vite**: Fast build tool optimized for frontend development.
- **TypeScript**: Provides type safety and helps with code clarity.
- **SASS**: Allows for modular and reusable styling.
- **React Router**: For routing and navigation.
- **React Select**: For filter dropdowns.
- **clsx**: For conditional class names in components.

## Project Structure

The project is structured to separate components, styles, and utilities:

```plaintext
src/
├── assets/           # Static assets (images, icons, etc.)
├── components/       # Reusable UI components (ProductCard, Filter, etc.)
├── pages/            # Pages of the application (ProductList)
├── scss/             # Global and modular SASS styles
├── utilities/        # Utility functions and constants
├── App.tsx           # Main App component
└── main.tsx          # Entry point
```
