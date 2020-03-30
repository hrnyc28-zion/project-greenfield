import { QA } from '../../api';
import setQuestions from './setQuestions';

// Use API calls to init redux store
const changeProduct = (id = 13) => {
  return async (dispatch) => {
    const questions = await QA.fetchAllQuestions(id);
    dispatch(setQuestions(questions.error ? [] : questions.results));
  };
};

export default changeProduct;
