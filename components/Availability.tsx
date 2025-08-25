import React from 'react';
import { Spacing } from './Layout';

const Availability: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold text-center">Konten Youtube terakhir yang saya upload</h2>
      <Spacing size={24} />
      <div className="w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/ag3znSncd24"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Availability;