import type { Meta, StoryObj } from '@storybook/react';

import SpendingsList, { ISpendingsListProps } from '../components/spendings/spendings-list';

const meta: Meta<typeof SpendingsList> = {
  title: 'Spendings/Spendings List',
  component: SpendingsList,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof SpendingsList>;

export default meta;
type Story = StoryObj<typeof SpendingsList>;

const storyProps: ISpendingsListProps = {
  spendings:
  [
    {
      id: 1,
      cost: 1,
      comment: 'comment 1',
      category: { id: 1, name: 'category name'},
      expanded: true,
    },
    {
      id: 2,
      cost: 2,
      comment: 'comment 2',
      category: { id: 2, name: 'category name 2'},
      expanded: false,
    },
  ],
  deleteHandler: () => {},
  updateHandler: () => {},
  expandHandler: (id: number) => {
    
  },
}

export const SpendingListStory: Story = {
  name: 'SpendingListStory',
  args: {
    ...storyProps
  }
};
