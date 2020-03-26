import React, { useState } from 'react';
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

  var [answerPaginate, setanswerPaginate] = useState(2);

  const sortedAnswers = Object.values(answers).sort((a, b) =>
    a.helpfulness > b.helpfulness ? -1 : 0
  );

  const handleLoadMoreAnswer = () => {
    if (answerPaginate < sortedAnswers.length - 1) {
      setanswerPaginate(answerPaginate + 2);
    }
  };

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
      <AnswerList answers={sortedAnswers.slice(0, answerPaginate)} />
      {!(
        sortedAnswers.length <= 2 || answerPaginate >= sortedAnswers.length
      ) && <button onClick={handleLoadMoreAnswer}>LOAD MORE ANSWERS</button>}
    </div>
  );
};
