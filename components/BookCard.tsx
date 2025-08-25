import React from 'react';
import { Book } from '../types';
import { Spacing } from './Layout';
import { StarIcon } from './icons/Icons';

interface BookCardProps {
  book: Book;
}

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="w-auto h-4">
                    <StarIcon isFilled={i < rating} />
                </div>
            ))}
        </div>
    );
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <a href={book.url} className="text-white no-underline">
      <img src={book.imageUrl} alt={book.title} className="w-full rounded-2xl" />
      <Spacing size={16} />
      <StarRating rating={book.rating} />
      <Spacing size={4} />
      <div className="font-bold">{book.title}</div>
      <Spacing size={4} />
      <p className="text-[#bababa]">{book.author}</p>
    </a>
  );
};

export default BookCard;
