export interface IArticlesSection {}

import { useArticles } from '../../pages/api/hooks';

import { type IArticleData } from '../../types';
import ArticleCard from '../ArticleCard/ArticleCard';
import Loading from '../LoadingContainer/Article/Loading';

const ArticlesSection: React.FC<IArticlesSection> = ({}) => {
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
                key={index}
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
              key={index}
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