import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Author from './[author-id]';

export default {
  title: 'Pages/Author',
  component: Author,
} as ComponentMeta<typeof Author>;

const LandingPage: ComponentStory<typeof Author> = (args) => (
  <Author {...args} />
);

export const Base = LandingPage.bind({});
