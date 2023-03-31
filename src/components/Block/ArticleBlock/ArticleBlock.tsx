import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import TagBadge from '../../Badge/TagBadge/TagBadge';
import BottomMenu from './controls/BottomMenu';

export interface IPostOverviewCard {
  featureImage: string | null;
  id: number;
  slug: string;
  isFeatured: boolean;
  isMainArticle: boolean;
  body?: string;
  profileImage: string;
  author: string;
  date: string;
  title: string;
  tags?: Array<string>;
  readingTime: number;
  reactionCount: number;
}

const ArticleBlock = ({
  featureImage,
  id,
  isFeatured = true,
  isMainArticle = false,
  profileImage,
  author,
  date,
  title,
  body,
  tags,
  readingTime,
  reactionCount,
}: IPostOverviewCard) => {
  return (
    <div
      className={`${
        !isMainArticle ? 'max-w-675' : 'max-w-screen-md'
      } card-border`}
    >
      {featureImage && isFeatured ? (
        <div className="relative aspect-auto650/273">
          <Link href={`/article/${id}`}>
            <Image
              src={featureImage}
              alt="card__image"
              className="w-auto rounded-t-md"
              fill
            />
          </Link>
        </div>
      ) : (
        ''
      )}

      <div className=" p-1.25rem md:pl-3.5rem">
        <div className="flex flex-row ">
          <Image
            src={
              profileImage ? profileImage : '/images/blank-profile-picture.png'
            }
            alt="user__image"
            className="mr-1 rounded-full"
            width="50"
            height="50"
          />
          <div>
            <button className="p-1 text-sm font-semibold hover:bg-nameHover">
              {author}
            </button>
            <div className="ml-1 text-xs">
              <Link href="/">{moment(date).format('MMM DD')}</Link>
            </div>
          </div>
        </div>
        <div className={`${!isMainArticle ? 'pl-3.5rem' : ''} `}>
          {isMainArticle ? (
            <h1 className="">{title}</h1>
          ) : (
            <h2 className="">
              <Link className="flex hover:text-hover" href={`/article/${id}`}>
                {title}
              </Link>
            </h2>
          )}

          <div className="mb-6">
            {tags?.map((tag, idx) => {
              return <TagBadge tagName={tag} key={idx} />;
            })}
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: body as string }}
            className="text-lg"
          ></div>

          {isMainArticle ? (
            <div> ADD COMMENT COMPONENT HERE</div>
          ) : (
            <BottomMenu
              readingTime={readingTime}
              reactionCount={reactionCount}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleBlock;
