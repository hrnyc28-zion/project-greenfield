import React, { useState } from 'react';
import QA_API from '../../../api/qa';

const dateFormatter = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const AnswerItem = ({ answer }) => {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);

  const handleAnswerHelpful = async () => {
    const answerInfo = localStorage.getItem(answer.id);
    if (!answerInfo) {
      const response = await QA_API.markAnswerHelpful(answer.id);
      if (!response.error) {
        setHelpfulness(helpfulness + 1);
        localStorage.setItem(
          answer.id,
          JSON.stringify({ votedAnswerHelp: true })
        );
      }
    }
  };

  return (
    <div data-testid="answerItem">
      <span>{answer.body}</span>
      <br />
      {answer.photos.map((photoUrl) => (
        <img
          src={photoUrl}
          alt=" "
          style={{ width: '120px', height: '120px' }}
          className="img-thumbnail"
        />
      ))}
      <br />
      by {answer.answerer_name}
      {', '}
      {dateFormatter(answer.date)} | Helpful?{' '}
      <button
        type="button"
        style={{
          color: '#919191',
          border: 'none',
          textDecoration: 'underline',
          outline: 'none'
        }}
        onClick={handleAnswerHelpful}
      >
        Yes
      </button>
      ({helpfulness}) |{' '}
      <button
        type="button"
        style={{
          color: '#919191',
          border: 'none',
          textDecoration: 'underline',
          outline: 'none'
        }}
      >
        report
      </button>
    </div>
  );
};

export default AnswerItem;
