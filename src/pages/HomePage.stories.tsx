import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Home from './index.page';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const LandingPage: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Base = LandingPage.bind({});
