import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchQuestion from './Search/SearchQuestion';
import QuestionList from './Questions/QuestionList';
import changeProduct from '../../redux/actions/changeProduct';

const QA = ({ storeQuestions, initQuestionsInStore }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    initQuestionsInStore();
  });

  useEffect(() => {
    setQuestions(storeQuestions);
  }, [storeQuestions]);

  const renderQuestionList = () => {
    if (questions.length === 0) {
      return <button type="button">Submit A New Question</button>;
    }
    return (
      <div>
        <QuestionList questions={questions} />
        <div className="bottomButton">
          <button className="btn btn-outline-secondary" type="button">
            MORE ANSWERED QUESTIONS
          </button>
          <button className="btn btn-outline-secondary ml-2" type="button">
            ADD A QUESTION +
          </button>
        </div>
      </div>
    );
  };

  return (
    <div id="qa" data-testid="qaTest">
      <h1>QUESTIONS & ANSWERS</h1>
      <SearchQuestion />
      {renderQuestionList()}
    </div>
  );
};

const mapStatetoProps = (state) => ({
  storeQuestions: state.currentQuestion
});

const mapDispatchToProps = (dispatch) => {
  return {
    initQuestionsInStore: () => dispatch(changeProduct(13))
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(QA);
