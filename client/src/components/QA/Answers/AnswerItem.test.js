import React from 'react';
import { render } from '@testing-library/react';
import AnswerItem from './AnswerItem';

test('renders learn react link', () => {
  const { getByTestId } = render(<AnswerItem />);
  const component = getByTestId('answerItem');
  expect(component).toBeInTheDocument();
});
