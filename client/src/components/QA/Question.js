import React from 'react';

export const Question = ({ currentQuestion }) => {
  const {
    question_body: title,
    question_id: id,
    question_date: date,
    question_helpfulness: helpfulness,
    reported,
    answers,
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
      {answers['125161'].body}
      <div>
        by {answers['125161']['answerer_name']}
        {', '}
        {new Date(answers['125161'].date).formatted()} | Helpful?{' '}
        <a href="#" style={{ color: '#919191' }}>
          Yes
        </a>
        ({answers['125161'].helpfulness}) |{' '}
        <a href="#" style={{ color: '#919191' }}>
          report
        </a>
      </div>
    </div>
  );
};
