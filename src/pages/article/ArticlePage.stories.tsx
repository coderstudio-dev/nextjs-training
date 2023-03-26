import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Article from './[article-id].page';

export default {
  title: 'Pages/Article',
  component: Article,
} as ComponentMeta<typeof Article>;

const LandingPage: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);

export const Base = LandingPage.bind({});

Base.parameters = {
  nextRouter: {
    path: '/article/[article-id]',
    asPath: '/article/1370571',
    query: {
      'article-id': '1370571',
    },
  },
};

export const NotFound = LandingPage.bind({});

NotFound.parameters = {
  nextRouter: {
    path: '/article/[article-id]',
    asPath: '/article/1',
    query: {
      'article-id': '1',
    },
  },
};
