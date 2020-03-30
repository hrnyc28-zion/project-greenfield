import { Product, QA } from '../../api';
import setCurrentProduct from './currentProduct';
import setStyles from './styles';
import { setStyle, setThumbnail } from './selected';
import setQuestions from './setQuestions';

// Use API calls to init redux store
const changeProduct = (id) => {
  return async (dispatch) => {
    const product = await Product.getProduct(id);
    dispatch(setCurrentProduct(product));

    const { results: styles } = await Product.getStyles(id);
    dispatch(setStyles(styles));
    dispatch(setStyle(styles[0]));
    dispatch(setThumbnail(0));
    const questions = await QA.fetchAllQuestions(id);
    dispatch(setQuestions(questions.error ? [] : questions.results));
  };
};

export default changeProduct;
