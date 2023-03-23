import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Article from './[article-id]';

export default {
  title: 'Pages/Article',
  component: Article,
} as ComponentMeta<typeof Article>;

const LandingPage: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);

export const Base = LandingPage.bind({});
