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
  labels: ['Child1']
}

const twoTabsContainerProps: ITabContainerProps = {
  labels: ['Child1', 'Child2']
}

export const OneTab: Story = {
  name: 'One tab',
  args: {
    ...tabContainerProps
  }
};

export const TwoTabs: Story = {
  name: 'Two tabs',
  // args: {
  //   ...twoTabsContainerProps
  // },
  argTypes: {
    children: {
      options: ['Child1', 'Child2'],
      mapping: {
        Child1: <span>Normal</span>,
        Child2: <b>Bold</b>,
      },
    },
    labels: {
      options: ['Child1', 'Child2'],
      mapping: {
        Child1: 'Child1',
        Child2: 'Child2',
      },
    },
  },
};
