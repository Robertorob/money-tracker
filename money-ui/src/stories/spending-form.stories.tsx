import type { Meta, StoryObj } from '@storybook/react';
import store from '../redux/store';

import SpendingForm from '../components/spendings/spending-form';
import { Provider } from 'react-redux';

const meta: Meta<typeof SpendingForm> = {
  title: 'Spendings/SpendingForm',
  component: SpendingForm,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof SpendingForm>;

export default meta;
type Story = StoryObj<typeof SpendingForm>;

const SpendingFormAdd = (): any => {
  return 
  
};

export const Add: Story = {
  render: () => 
    <Provider store={store}>
      <SpendingForm />
    </Provider>
}
