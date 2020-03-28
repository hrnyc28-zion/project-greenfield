import React from 'react';
import { render } from '@testing-library/react';
import AnswerList from './AnswerList';

test('renders learn react link', () => {
  const { getByTestId } = render(<AnswerList />);
  const component = getByTestId('answerList');
  expect(component).toBeInTheDocument();
});
