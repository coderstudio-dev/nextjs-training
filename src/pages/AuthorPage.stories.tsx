import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Author from './author';

export default {
  title: 'Pages/Author',
  component: Author,
} as ComponentMeta<typeof Author>;

export const Homepage: ComponentStory<typeof Author> = (args) => (
  <Author {...args} />
);
