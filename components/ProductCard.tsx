import React from 'react';
import { Product } from '../types';
import { Spacing } from './Layout';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <a href={product.url} className="group text-white no-underline">
      <div className="relative overflow-hidden h-[190px] sm:h-[320px] rounded-[24px] sm:rounded-[32px]">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-3 right-3 inline-block px-3 py-1.5 bg-[#94d7c5] text-[#070707] text-xs font-semibold rounded-full">
          Sale -{product.discount}%
        </div>
      </div>
      <Spacing size={16} />
      <div className="font-bold">${product.price.toFixed(2)}</div>
      <Spacing size={4} />
      <p className="text-[#bababa]">{product.name}</p>
    </a>
  );
};

export default ProductCard;
