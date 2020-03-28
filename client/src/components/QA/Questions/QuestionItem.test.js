import React from 'react';
import { render } from '@testing-library/react';
import QuestionItem from './QuestionItem';

test('renders learn react link', () => {
  const { getByTestId } = render(<QuestionItem />);
  const component = getByTestId('questionItem');
  expect(component).toBeInTheDocument();
});
