import ArticlesSection from './article/ArticlesSection/ArticlesSection';
import PageTemplate from './hoc/pageTemplate.page';

const Home = () => {
  return (
    <>
      <ArticlesSection />
    </>
  );
};

export default PageTemplate('default', Home);
