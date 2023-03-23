import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Article, { type IPostOverviewCard } from './ArticleCard';
import { mockArticleCardProps } from './ArticleCard.mock';

export default {
  title: 'Components/ArticleCard',
  component: Article,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} as ComponentMeta<typeof Article>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);

export const FeaturedOverview = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FeaturedOverview.args = {
  ...mockArticleCardProps.base,
  isFeatured: true,
} as IPostOverviewCard;

export const Overview = Template.bind({});
Overview.args = {
  ...mockArticleCardProps.base,
  isFeatured: false,
} as IPostOverviewCard;

export const Main = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  ...mockArticleCardProps.base,
  isMainArticle: true,
  body: '<p>The 1996 Summer Olympics were held in Atlanta, marking the 100th Anniversary of the modern Olympic Games. Dolly the Sheep became the first mammal to have been cloned from an adult somatic cell. Macarena, sung by Los del Río and remixed by The Bayside Boys, became a major dance craze and cultural phenomenon.</p>\n\n<p>And in 1996, the first version of CSS specification is published. The standard contains specification to select font style,size and color</p>\n\n<p>The standard allowed the user to select font style and size and change the colour of the text and background.<br>\n</p>\n\n<div class="highlight js-code-highlight">\n<pre class="highlight css"><code>  <span class="nt">DIV</span> <span class="nt">P</span>           <span class="p">{</span> <span class="nl">font</span><span class="p">:</span> <span class="n">small</span> <span class="nb">sans-serif</span> <span class="p">}</span>\n  <span class="nc">.reddish</span> <span class="nt">H1</span>     <span class="p">{</span> <span class="nl">color</span><span class="p">:</span> <span class="no">red</span> <span class="p">}</span>\n<span class="nf">#x78y</span> <span class="nt">CODE</span>      <span class="p">{</span> <span class="nl">background</span><span class="p">:</span> <span class="no">blue</span> <span class="p">}</span>\n  <span class="nt">DIV</span><span class="nc">.sidenote</span> <span class="nt">H1</span> <span class="p">{</span> <span class="nl">font-size</span><span class="p">:</span> <span class="nb">large</span> <span class="p">}</span>\n</code></pre>\n<div class="highlight__panel js-actions-panel">\n<div class="highlight__panel-action js-fullscreen-code-action">\n    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>\n    <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>\n</svg>\n\n    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewbox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>\n    <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>\n</svg>\n\n</div>\n</div>\n</div>\n\n\n\n',
} as IPostOverviewCard;
