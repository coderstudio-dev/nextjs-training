import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';

export interface BaseProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
}

const Base: React.FC<BaseProps> = ({ isLoggedIn, children }) => {
  return (
    <div className={`flex min-h-screen flex-col`}>
      <Header isLoggedIn={isLoggedIn} />
      <div className="mt-2">{children}</div>
      <div className="m-auto" />
      <Footer />
    </div>
  );
};

export default Base;
