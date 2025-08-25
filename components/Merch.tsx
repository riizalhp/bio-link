import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Spacing } from './Layout';

const Merch: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-lg font-semibold text-center">New merchs available at crazy discounts</h4>
      <Spacing size={24} />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Spacing size={32} />
      <a href="#" className="inline-block w-full sm:w-auto px-6 py-3 bg-[#181818] hover:bg-[#070707] rounded-2xl font-semibold transition-all duration-400 ease-in-out text-center text-white">
        Browse more products
      </a>
    </div>
  );
};

export default Merch;
