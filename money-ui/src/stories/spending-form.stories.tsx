import type { Meta, StoryObj } from '@storybook/react';

import SpendingForm, { ICategory, ISpendingForm, ISpendingFormProps } from '../components/spendings/spending-form';

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

const initialCategory: ICategory = {
  id: 0,
  name: "Food"
}

const categories: ICategory[] = [
  initialCategory,
  {
    id: 1,
    name: 'Sport'
  }
]

const spendingForm: ISpendingForm = {
  id: 0,
  cost: 0,
  comment: '',
  category: initialCategory,
  isUpdate: false,
}

const spendingFormProps: ISpendingFormProps = {
  categories: categories,
  form: spendingForm,
  onCostChange: undefined,
  onCommentChange: undefined,
  onCategoryChange: undefined,
  onUpdateButtonClick: undefined,
  onCreateButtonClick: undefined
}

export const AddSpending: Story = {
  name: 'Add Spending',
  args: {
    ...spendingFormProps,
    form: spendingForm
  }
};

export const UpdateSpending: Story = {
  name: 'Update Spending',
  args: {
    ...spendingFormProps,
    form: {
      ...spendingForm,
      isUpdate: true,
    },
  }
};
