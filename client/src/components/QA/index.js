import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchQuestion from './Search/SearchQuestion';
import QuestionList from './Questions/QuestionList';
import changeProduct from '../../redux/actions/changeProduct';
import ModalForm from './Modal/ModalForm';

const QA = ({ storeQuestions, initQuestionsInStore }) => {
  const [questions, setQuestions] = useState([]);
  const [showAddQuestion, setshowAddQuestion] = useState(false);
  const [questionPaginate, setQuestionPaginate] = useState(2);

  useEffect(() => {
    initQuestionsInStore();
  }, [initQuestionsInStore]);

  useEffect(() => {
    setQuestions(storeQuestions);
  }, [storeQuestions]);

  const handleAddQuestionModalClose = () => {
    setshowAddQuestion(false);
  };

  const showAddQuestionModal = () => {
    setshowAddQuestion(true);
  };

  const handleLoadMoreQuestion = () => {
    if (questionPaginate < questions.length - 1) {
      setQuestionPaginate(questionPaginate + 2);
    }
  };

  const renderQuestionList = () => {
    if (questions.length === 0) {
      return (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={showAddQuestionModal}
        >
          Submit A New Question
        </button>
      );
    }
    return (
      <div>
        <QuestionList questions={questions.slice(0, questionPaginate)} />
        <div className="bottomButton">
          {!(
            questions.length <= 2 || questionPaginate >= questions.length - 1
          ) && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleLoadMoreQuestion}
            >
              MORE ANSWERED QUESTIONS
            </button>
          )}
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={showAddQuestionModal}
          >
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
      {/* {FIXME: Console err: findDOMNode is deprecated in StrictMode} */}
      <ModalForm
        show={showAddQuestion}
        handleClose={handleAddQuestionModalClose}
        content={{
          title: 'Ask Your Question',
          subtitle: 'About the [Product Name]',
          body: [
            {
              labelName: 'Your Question',
              inputType: 'text',
              placeholder: 'test'
            }
          ]
        }}
      />
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
