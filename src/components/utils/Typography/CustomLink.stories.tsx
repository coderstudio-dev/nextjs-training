import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import CustomLink, { type ICustomLink } from './CustomLink';
import { mockCustomLinkProps } from './CustomLink.mock';

export default {
  title: 'Components/Typography/CustomLink',
  component: CustomLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CustomLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomLink> = (args) => (
  <CustomLink {...args} />
);

export const Link = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Link.args = {
  ...mockCustomLinkProps.base,
} as ICustomLink;
