import React from 'react';
import { AnswerItem } from './AnswerItem';

export const AnswerList = ({ answers }) => {
  const sortedAnswers = Object.values(answers).sort((a, b) =>
    a.helpfulness > b.helpfulness ? -1 : 0
  );
  return (
    <div id="answerList">
      {sortedAnswers.map((answer) => (
        <AnswerItem key={answer.id} answer={answer} />
      ))}
    </div>
  );
};
