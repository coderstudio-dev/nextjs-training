import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Menu from './Menu';
import { mockMenuProps } from './Menu.mock';

export default {
  title: 'Components/Menu',
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = () => <Menu />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockMenuProps.base,
};
