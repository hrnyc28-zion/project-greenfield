import React from 'react';
import { QuestionItem } from './QuestionItem';

export const QuestionList = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => {
        return (
          <QuestionItem key={question.question_id} currentQuestion={question} />
        );
      })}
    </div>
  );
};
