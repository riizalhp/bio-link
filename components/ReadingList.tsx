import React from 'react';
import { BOOKS } from '../constants';
import BookCard from './BookCard';
import { Spacing } from './Layout';

const ReadingList: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-lg font-semibold text-center">Books I am reading</h4>
      <Spacing size={24} />
      <div className="w-full flex sm:grid sm:grid-cols-3 sm:gap-5 overflow-x-auto sm:overflow-visible pb-5 sm:pb-0 space-x-5 sm:space-x-0">
        {BOOKS.map(book => (
          <div key={book.id} className="w-[180px] sm:w-full shrink-0">
            <BookCard book={book} />
          </div>
        ))}
      </div>
      <Spacing size={32} />
      <a href="#" className="inline-block w-full sm:w-auto px-6 py-3 bg-[#181818] hover:bg-[#070707] rounded-2xl font-semibold transition-all duration-400 ease-in-out text-center text-white">
        See my book recommendations
      </a>
    </div>
  );
};

export default ReadingList;
