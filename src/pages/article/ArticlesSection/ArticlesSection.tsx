import { useArticles } from '../../api/hooks';

import ArticleCard from '../../../components/Block/ArticleBlock/ArticleBlock';
import Loading from '../../../components/LoadingContainer/Article/Loading';
import { type IArticleData } from '../../../types';

const ArticlesSection = () => {
  const { articles, status } = useArticles();

  return (
    <div>
      {status === 'loading' ? (
        <Loading />
      ) : (
        articles.map((article: IArticleData, index: number) => {
          if (index === 0) {
            return (
              <ArticleCard
                key={article.id}
                id={article.id}
                slug={article.slug}
                isFeatured={true}
                isMainArticle={false}
                author={article.user.name}
                profileImage={article.user.profile_image_90}
                featureImage={article.social_image}
                date={article.published_timestamp}
                tags={article.tag_list}
                title={article.title}
                readingTime={article.reading_time_minutes}
                reactionCount={article.public_reactions_count}
              />
            );
          }
          return (
            <ArticleCard
              key={article.id}
              id={article.id}
              slug={article.slug}
              isFeatured={false}
              isMainArticle={false}
              author={article.user.name}
              profileImage={article.user.profile_image_90}
              featureImage={article.social_image}
              date={article.published_timestamp}
              tags={article.tag_list}
              title={article.title}
              readingTime={article.reading_time_minutes}
              reactionCount={article.public_reactions_count}
            />
          );
        })
      )}
    </div>
  );
};

export default ArticlesSection;
