export const categoriesTypes = {
  expense: 'expense',
  income: 'income',
};

export const defaultCategories = [
  { name: 'Salary', icon: 'cash', type: categoriesTypes.income },
  { name: 'Savings', icon: 'coin', type: categoriesTypes.income },
  { name: 'Deposits', icon: 'castle', type: categoriesTypes.income },
  { name: 'Bills', icon: 'tag', type: categoriesTypes.expense },
  { name: 'Car', icon: 'car', type: categoriesTypes.expense },
  { name: 'Communications', icon: 'phone', type: categoriesTypes.expense },
  { name: 'Eating Out', icon: 'silverware', type: categoriesTypes.expense },
  { name: 'Entertainment', icon: 'martini', type: categoriesTypes.expense },
  { name: 'Food', icon: 'food', type: categoriesTypes.expense },
  { name: 'Gifts', icon: 'gift', type: categoriesTypes.expense },
  { name: 'Health', icon: 'heart-pulse', type: categoriesTypes.expense },
  { name: 'Home', icon: 'home-variant', type: categoriesTypes.expense },
  { name: 'Pets', icon: 'cat', type: categoriesTypes.expense },
  { name: 'Sport', icon: 'dumbbell', type: categoriesTypes.expense },
  { name: 'Taxi', icon: 'taxi', type: categoriesTypes.expense },
];
