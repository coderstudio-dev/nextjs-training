import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import TagBadge from '../TagBadge/TagBadge';

export interface IPostOverviewCard {
  featureImage: string | null;
  isFeatured: boolean;
  isMainArticle: boolean;
  body?: string;
  profileImage: string;
  author: string;
  date: string;
  title: string;
  tags?: Array<string>;
  readingTime: number;
}

const ArticleCard: React.FC<IPostOverviewCard> = ({
  featureImage,
  isFeatured = true,
  isMainArticle = false,
  profileImage,
  author,
  date,
  title,
  body,
  tags,
  readingTime,
}) => {
  return (
    <div
      className={`${
        !isMainArticle ? 'max-w-675' : 'max-w-screen-md'
      } card-border`}
    >
      {featureImage && isFeatured ? (
        <div className="relative aspect-auto650/273">
          <Link href="/">
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
              <Link className="flex hover:text-hover" href="/">
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
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <Link
                  className="flex items-start rounded-md p-2 hover:bg-gray-100"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    role="img"
                    aria-labelledby="ac7fba2axsoza03j24flhx7fwy3fbdid"
                    className="mr-1"
                  >
                    <title id="ac7fba2axsoza03j24flhx7fwy3fbdid">
                      Reactions
                    </title>
                    <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                  </svg>
                  7 <span className="hidden sm:inline"> Reactions</span>
                </Link>
                <Link
                  className="flex items-start rounded-md p-2 hover:bg-gray-100"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    role="img"
                    aria-labelledby="aq9via7431x804qjhgcq2t3t210wtd6h"
                    className="crayons-icon"
                  >
                    <title id="aq9via7431x804qjhgcq2t3t210wtd6h">
                      Comments
                    </title>
                    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                  </svg>
                  <span className="hidden sm:inline">Add Comment</span>
                </Link>
              </div>
              <div className="flex items-center">
                <small className="mr-2">{readingTime} min read</small>
                <button className="rounded-md p-3 hover:bg-hoverTrans50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
