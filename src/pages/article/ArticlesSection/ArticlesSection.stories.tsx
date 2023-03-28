import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import ArticlesSection, { type IArticlesSection } from './ArticlesSection';
import { mockArticlesSectionProps } from './ArticlesSection.mock';

export default {
  title: 'Pages/Article/ArticlesSection',
  component: ArticlesSection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} as ComponentMeta<typeof ArticlesSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticlesSection> = (args) => (
  <ArticlesSection {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockArticlesSectionProps.base,
} as IArticlesSection;
