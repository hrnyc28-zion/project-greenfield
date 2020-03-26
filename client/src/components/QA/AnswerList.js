import React from 'react';
import { AnswerItem } from './AnswerItem';

export const AnswerList = ({ answers }) => {
  return (
    <div id="answerList">
      {answers.map((answer) => (
        <AnswerItem key={answer.id} answer={answer} />
      ))}
    </div>
  );
};
