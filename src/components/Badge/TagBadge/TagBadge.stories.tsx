import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import TagBadge, { type ITagBadge } from './TagBadge';
import { mockTagBadgeProps } from './TagBadge.mock';

export default {
  title: 'Components/Badge/TagBadge',
  component: TagBadge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof TagBadge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TagBadge> = (args) => (
  <TagBadge {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockTagBadgeProps.base,
} as ITagBadge;
