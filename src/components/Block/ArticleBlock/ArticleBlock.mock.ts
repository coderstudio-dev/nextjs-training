import { type IPostOverviewCard } from './ArticleBlock';

const base: IPostOverviewCard = {
  title: 'How to Get Your First Job as a Self-Taught Programmer',
  author: 'Jan Rodulf Basoc',
  featureImage:
    'https://res.cloudinary.com/practicaldev/image/fetch/s--UtraxELl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0rxvkqyx7a2qkgotm1qz.png',
  isFeatured: true,
  isMainArticle: false,
  readingTime: 0,
  profileImage: 'https://i.pravatar.cc/40?img=3',
  tags: ['devdiscuss', 'ai', 'machinelearning', 'chatgpt'],
  date: '2023-03-09T09:20:56.000+00:00',
  id: 1416664,
  slug: 'meme-monday-cbo',
  reactionCount: 4,
};

export const mockArticleBlockProps = {
  base,
};
