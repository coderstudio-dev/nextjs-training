import React, { useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import Base from './templates/Base.page';

type LayoutType = 'default' | 'article' | 'author';

const PageTemplate = (
  layoutType: LayoutType,
  MainComponent: React.FunctionComponent
) => {
  const Wrapper = () => {
    const { authenticated } = useContext(AuthContext);

    if (layoutType === 'article') {
      return (
        <Base isLoggedIn={authenticated}>
          <div className="flex justify-center space-x-0 mdtb:space-x-4">
            <div className="hidden h-auto w-64 flex-none space-y-4 mdtb:inline">
              <div>article menu</div>
            </div>
            <div className="w-m h-auto max-w-4xl flex-auto space-y-4 mdtb:m-0">
              <MainComponent />
            </div>
            <div className="hidden h-auto w-80 flex-none space-y-4 lg:inline">
              <div>RIGHT CARDS</div>
            </div>
          </div>
        </Base>
      );
    }

    if (layoutType === 'author') {
      return (
        <Base isLoggedIn={authenticated}>
          <MainComponent />
        </Base>
      );
    }

    return (
      <Base isLoggedIn={authenticated}>
        <div className="flex justify-center space-x-0 mdtb:space-x-4">
          <div className="hidden h-auto w-64 flex-none space-y-4 mdtb:inline">
            <div>menu</div>
          </div>
          <div className="w-m h-auto max-w-2xl flex-auto space-y-4 mdtb:m-0">
            <MainComponent />
          </div>
          <div className="hidden h-auto w-80 flex-none space-y-4 lg:inline">
            <div>RIGHT CARDS</div>
          </div>
        </div>
      </Base>
    );
  };

  return Wrapper;
};

export default PageTemplate;
