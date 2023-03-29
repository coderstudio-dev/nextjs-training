import React from 'react';
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
      <div className="bg-slate-500">
        <h1>INSERT FOOTER</h1>
      </div>
    </div>
  );
};

export default Base;
