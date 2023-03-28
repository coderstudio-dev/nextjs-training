import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import BottomMenu, { type IBottomMenu } from './BottomMenu';
import { mockBottomMenuProps } from './BottomMenu.mock';

export default {
  title: 'Components/Block/ArticleBlock/BottomMenu',
  component: BottomMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BottomMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomMenu> = (args) => (
  <BottomMenu {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockBottomMenuProps.base,
} as IBottomMenu;
