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
  spendings: []
}

export const SpendingListStory: Story = {
  name: 'SpendingListStory',
  args: {
    ...storyProps
  }
};
