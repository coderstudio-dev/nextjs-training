import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Author from './[author-id].page';

export default {
  title: 'Pages/Author',
  component: Author,
} as ComponentMeta<typeof Author>;

const LandingPage: ComponentStory<typeof Author> = (args) => <Author />;

export const Base = LandingPage.bind({});
