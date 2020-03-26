import React from 'react';

export const AnswerItem = ({ answer }) => {
  return (
    <div>
      <span>{answer.body}</span>
      <br />
      by {answer['answerer_name']}
      {', '}
      {new Date(answer.date).formatted()} | Helpful?{' '}
      <a href="#" style={{ color: '#919191' }}>
        Yes
      </a>
      ({answer.helpfulness}) |{' '}
      <a href="#" style={{ color: '#919191' }}>
        report
      </a>
    </div>
  );
};
