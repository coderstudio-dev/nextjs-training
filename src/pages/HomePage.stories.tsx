import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Home from './index';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

export const Homepage: ComponentStory<typeof Home> = (args) => (
  <Home {...args} />
);
