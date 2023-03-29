import { useRouter } from 'next/router';
import ArticleCard from '../../components/Block/ArticleBlock/ArticleBlock';
import Loading from '../../components/LoadingContainer/Article/Loading';
import { useArticle } from '../../pages/api/hooks';
import PageTemplate from '../hoc/pageTemplate.page';

const Article = () => {
  const { query } = useRouter();

  console.log(query);

  const { article, status } = useArticle(
    query['article-id'] as unknown as number
  );

  console.log(status);
  console.log(article);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === '404') {
    return (
      <div className="mt-2">
        <span>CANNOT FIND ARTICLE</span>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <>
      <ArticleCard
        id={article.id}
        slug={article.slug}
        isFeatured={true}
        isMainArticle={true}
        author={article.user.name}
        profileImage={article.user.profile_image_90}
        featureImage={article.social_image}
        date={article.published_timestamp}
        tags={article.tags}
        body={article.body_html}
        title={article.title}
        readingTime={article.reading_time_minutes}
        reactionCount={article.public_reactions_count}
      />
    </>
  );
};

export default PageTemplate('article', Article);
