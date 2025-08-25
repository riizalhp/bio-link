import React from 'react';
import { Article } from '../types';
import { Spacing } from './Layout';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <a href={article.url} className="text-left text-white no-underline">
      <img src={article.imageUrl} alt={article.title} className="w-full h-28 sm:h-[180px] object-cover rounded-[24px] sm:rounded-[32px]" />
      <Spacing size={16} />
      <div className="font-bold">{article.title}</div>
      <Spacing size={4} />
      <p className="text-[#bababa]">{article.description}</p>
      <Spacing size={4} />
      <div className="text-xs text-gray-500">{article.date}</div>
    </a>
  );
};

export default ArticleCard;
