import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import ProfileCardBlock, { type IProfileCardBlock } from './ProfileCardBlock';
import { mockProfileCardBlockProps } from './ProfileCardBlock.mock';

export default {
  title: 'Components/Block/ProfileCardBlock',
  component: ProfileCardBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProfileCardBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileCardBlock> = (args) => (
  <ProfileCardBlock {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockProfileCardBlockProps.base,
} as IProfileCardBlock;
