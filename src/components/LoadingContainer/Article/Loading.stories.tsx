import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Loading, { type ILoading } from './Loading';
import { mockLoadingProps } from './Loading.mock';

export default {
  title: 'components/LoadingSkeleton',
  component: Loading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} as ComponentMeta<typeof Loading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockLoadingProps.base,
} as ILoading;
