import React from 'react';
import Header from '../components/navigation/header/Header';

export interface PageTemplateProps {
  children: React.ReactNode;
  type?: 'default' | 'logged-in';
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  type = 'default',
  children,
}) => {
  switch (type) {
    case 'logged-in':
      return (
        <div className={`flex min-h-screen flex-col`}>
          <Header isLoggedIn={true} />
          <div>{children}</div>
          <div className="m-auto" />
          <div className="bg-slate-500">
            <h1>INSERT FOOTER</h1>{' '}
          </div>
        </div>
      );
  }

  return (
    <div className={`flex min-h-screen flex-col`}>
      <Header isLoggedIn={false} />
      <div>{children}</div>
      <div className="m-auto" />
      <div className="bg-slate-500">
        <h1>INSERT FOOTER</h1>{' '}
      </div>
    </div>
  );
};

export default PageTemplate;
