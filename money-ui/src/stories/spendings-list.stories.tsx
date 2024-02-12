import type { Meta, StoryObj } from '@storybook/react';
import { State, Store } from "@sambego/storybook-state";

import SpendingsList, { ISpendingsListProps } from '../components/spendings/spendings-list';

const store = new Store({
  spendings:
  [
    {
      id: 1,
      cost: 100,
      comment: 'comment 1',
      tag: { id: 1, name: 'tag name'},
      expanded: false,
    },
    {
      id: 2,
      cost: 200,
      comment: 'comment 2',
      tag: { id: 2, name: 'tag name 2'},
      expanded: false,
    },
  ],
  deleteHandler: () => {},
  updateHandler: () => {},
  expandHandler: (id: number) => {
    store.set(
    { 
      spendings: store.get('spendings').map(spending => spending.id === id ?
        {
          ...spending, 
          expanded: !spending.expanded,
        } : spending)
    });
  },
});

const SpendingsListStoryWithState = (props: ISpendingsListProps) => (
  <State store={store}>
    <SpendingsList
      {...props}
    />
  </State>
);

const meta: Meta<typeof SpendingsListStoryWithState> = {
  title: 'Spendings/SpendingsList',
  component: SpendingsListStoryWithState,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof SpendingsListStoryWithState>;

export default meta;
type Story = StoryObj<typeof SpendingsListStoryWithState>;

export const SpendingsListStory: Story = {
  name: 'SpendingsListStory',
};
