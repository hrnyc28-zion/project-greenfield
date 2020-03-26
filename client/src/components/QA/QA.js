import React, { useState, useEffect } from 'react';
import QA_API from '../../api/qa';
import { SearchQuestion } from './SearchQuestion';
import { QuestionList } from './QuestionList';

export const QA = () => {
  var [questions, setQuestions] = useState([]);

  const updateQuestions = async () => {
    const response = await QA_API.fetchAllQuestions(8);
    setQuestions(response.results);
  };

  useEffect(() => {
    updateQuestions();
  }, []);

  return (
    <div id="qa">
      <h1>QUESTIONS & ANSWERS</h1>
      <SearchQuestion />
      {questions.length > 0 && <QuestionList questions={questions} />}
    </div>
  );
};

Date.prototype.formatted = function () {
  return this.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
