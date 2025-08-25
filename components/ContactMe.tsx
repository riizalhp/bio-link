import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <div className="text-center">
      <p className="text-lg text-[#bababa]">
        Mau website link di bio unik seperti ini?{' '}
        <a 
          href="https://wa.me/6281292218144?text=Halo%20Rizal,%20saya%20tertarik%20untuk%20membuat%20website%20link%20di%20bio." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-semibold text-white underline transition-colors hover:text-[#78ff00]"
        >
          contact me
        </a>
      </p>
    </div>
  );
};

export default ContactMe;
