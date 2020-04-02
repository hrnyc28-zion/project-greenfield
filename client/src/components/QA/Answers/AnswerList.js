import React from 'react';
import AnswerItem from './AnswerItem';

const AnswerList = ({ answers, handleLoadMoreAnswer, showLoadMore }) => {
  return (
    <div
      data-testid="answerList"
      style={{ display: 'flex', marginTop: '8px', marginBottom: '8px' }}
    >
      <h5
        style={{
          marginRight: '8px',
          paddingTop: '2px',
          color: 'rgb(82, 82, 82)',
          fontWeight: 'bolder'
        }}
      >
        A:{' '}
      </h5>

      <div>
        {answers.map((answer) => (
          <AnswerItem key={answer.id} answer={answer} />
        ))}
        {showLoadMore && (
          <button
            type="button"
            onClick={handleLoadMoreAnswer}
            style={{
              fontWeight: 'bold',
              border: 'none',
              paddingLeft: '0px',
              color: 'rgb(88,88,88)',
              outline: 'none'
            }}
          >
            LOAD MORE ANSWERS
          </button>
        )}
      </div>
    </div>
  );
};

export default AnswerList;
