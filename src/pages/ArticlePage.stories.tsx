import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Article from './article';

export default {
  title: 'Pages/Article',
  component: Article,
} as ComponentMeta<typeof Article>;

export const Homepage: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);
