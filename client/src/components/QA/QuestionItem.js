import React from 'react';
import { AnswerList } from './AnswerList';

export const QuestionItem = ({ currentQuestion }) => {
  const {
    question_body: title,
    question_id: id,
    question_date: date,
    question_helpfulness: helpfulness,
    reported,
    answers
  } = currentQuestion;

  return (
    <div>
      <h3>Q: {title}</h3>
      <div className="sideAction">
        Helpful?{' '}
        <a href="#" style={{ color: '#919191' }}>
          Yes
        </a>
        ({helpfulness}) |{' '}
        <a href="#" style={{ color: '#919191' }}>
          Add Answer
        </a>
      </div>
      <span style={{ fontSize: 20, fontWeight: 'bold' }}>A: </span>
      {/* <Answers answers={answers} /> */}
      <AnswerList answers={answers} />
    </div>
  );
};
