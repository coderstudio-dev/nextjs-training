import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Author from './[author-id]';

export default {
  title: 'Pages/Author',
  component: Author,
} as ComponentMeta<typeof Author>;

export const LandingPage: ComponentStory<typeof Author> = (args) => (
  <Author {...args} />
);
