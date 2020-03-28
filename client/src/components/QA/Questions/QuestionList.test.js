import React from 'react';
import { render } from '@testing-library/react';
import QuestionList from './QuestionList';

test('renders learn react link', () => {
  const { getByTestId } = render(<QuestionList />);
  const component = getByTestId('questionList');
  expect(component).toBeInTheDocument();
});
