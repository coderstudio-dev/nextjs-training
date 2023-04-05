import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Content, { type IContent } from './Content';
import { mockContentProps } from './Content.mock';

export default {
  title: 'Components/Typography/Content',
  component: Content,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    textType: {
      options: ['text-muted', 'text-bold'],
      control: { type: 'select' }
    }
  },
} as ComponentMeta<typeof Content>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockContentProps.base,
} as IContent;
