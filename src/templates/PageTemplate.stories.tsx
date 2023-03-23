import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import PageTemplate from './PageTemplate';

export default {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageTemplate>;

export interface PageTemplateProps {
  children: React.ReactNode;
  type?: 'default' | 'logged-in';
}

const DummyComponent: React.FC<PageTemplateProps> = ({ children }) => (
  <div style={{ padding: 60 }}>{children}</div>
);

const Template: ComponentStory<typeof PageTemplate> = (args) => (
  <PageTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <DummyComponent>
      <div>Default template with scrollable header and navigation items</div>

      <div className="m-auto" />
    </DummyComponent>
  ),
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  type: 'logged-in',
  children: (
    <DummyComponent>
      <div>Default template with scrollable header and navigation items</div>

      <div className="m-auto" />
    </DummyComponent>
  ),
};
