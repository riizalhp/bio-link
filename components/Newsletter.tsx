import React from 'react';
import ArticleCard from './ArticleCard';
import { ARTICLES } from '../constants';
import { Spacing } from './Layout';

const Newsletter: React.FC = () => {
  return (
    <div className="text-center">
      <h4 className="text-lg font-semibold">Exclusive content straight to your inbox</h4>
      <Spacing size={24} />
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          <input type="text" className="h-12 w-full bg-[#181818] rounded-2xl px-4 placeholder:text-gray-400 focus:border-[#070707] focus:ring-0 border-0" placeholder="Your first name" />
          <input type="email" className="h-12 w-full bg-[#181818] rounded-2xl px-4 placeholder:text-gray-400 focus:border-[#070707] focus:ring-0 border-0" placeholder="Your email address" required />
        </div>
        <button type="submit" className="w-full h-12 bg-[#783ff3] hover:bg-[#181818] rounded-2xl font-semibold transition-all duration-400 ease-in-out text-center">
          Subscribe to newsletter
        </button>
      </form>
      <Spacing size={8} />
      <p className="text-[#bababa]">Not to worry, we do not spam</p>
      <Spacing size={32} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {ARTICLES.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <Spacing size={32} />
      <a href="#" className="inline-block w-full sm:w-auto px-6 py-3 bg-[#181818] hover:bg-[#070707] rounded-2xl font-semibold transition-all duration-400 ease-in-out text-center text-white">
        Read more articles
      </a>
    </div>
  );
};

export default Newsletter;
