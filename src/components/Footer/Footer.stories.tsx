import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Footer, { type IFooter } from './Footer';
import { mockFooterProps } from './Footer.mock';

export default {
  title: 'Components/Footer',
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockFooterProps.base,
} as IFooter;