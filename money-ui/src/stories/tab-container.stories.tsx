import type { Meta, StoryObj } from '@storybook/react';

import TabContainer, { ITabContainerProps } from '../components/tab/tab-container';

const meta: Meta<typeof TabContainer> = {
  title: 'Tabs/TabContainer',
  component: TabContainer,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TabContainer>;

export default meta;
type Story = StoryObj<typeof TabContainer>;

const tabContainerProps: ITabContainerProps = {
  children: <div>Children</div>,
  labels: ['Tab'],
  tabContainerName: "tabContainerName",
}

const twoTabsContainerProps: ITabContainerProps = {
  labels: ['Tab 1', 'Tab 2'],
  children: [<div>Children 1</div>, <div>Children 2</div>],
  tabContainerName: "tabContainerName",
}

export const OneTab: Story = {
  name: 'One tab',
  args: {
    ...tabContainerProps
  }
};

export const TwoTabs: Story = {
  name: 'Two tabs',
  args: {
    ...twoTabsContainerProps
  },
};
