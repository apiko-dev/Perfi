import R from 'ramda';

export const categoriesTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === categoriesTypes.expense;

export const isIncome = type => type === categoriesTypes.income;

const incomeCategories = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseCategories = [
  { name: 'Bills', icon: 'tag' },
  { name: 'Car', icon: 'car' },
  { name: 'Communications', icon: 'phone' },
  { name: 'Eating Out', icon: 'silverware' },
  { name: 'Entertainment', icon: 'martini' },
  { name: 'Food', icon: 'food' },
  { name: 'Gifts', icon: 'gift' },
  { name: 'Health', icon: 'heart-pulse' },
  { name: 'Home', icon: 'home-variant' },
  { name: 'Pets', icon: 'cat' },
  { name: 'Sport', icon: 'dumbbell' },
  { name: 'Taxi', icon: 'taxi' },
];

const withType = type => category => ({ ...category, type });
const allWithType = type => R.map(withType(type));

export const defaultCategories = [
  ...allWithType(categoriesTypes.income)(incomeCategories),
  ...allWithType(categoriesTypes.expense)(expenseCategories),
];
