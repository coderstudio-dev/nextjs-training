import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header, { IHeader } from './Header';
import { mockHeaderProps } from './Header.mock';

export default {
  title: 'Components/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Navbar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Navbar.args = {
  ...mockHeaderProps.base,
} as IHeader;
