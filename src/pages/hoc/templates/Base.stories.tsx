import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import Base from './Base.page';

export default {
  title: 'Templates/Base',
  component: Base,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Base>;

export interface BaseProps {
  children: React.ReactNode;
  type?: 'default' | 'logged-in';
}

const DummyComponent: React.FC<BaseProps> = ({ children }) => (
  <div style={{ padding: 60 }}>{children}</div>
);

const Template: ComponentStory<typeof Base> = (args) => <Base {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoggedIn: false,
  children: (
    <DummyComponent>
      <div>Default template with scrollable header and navigation items</div>

      <div className="m-auto" />
    </DummyComponent>
  ),
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isLoggedIn: true,
  children: (
    <DummyComponent>
      <div>Default template with scrollable header and navigation items</div>

      <div className="m-auto" />
    </DummyComponent>
  ),
};
