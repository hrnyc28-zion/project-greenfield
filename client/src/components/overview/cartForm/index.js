import React from 'react';
import { Formik, Field, useField } from 'formik';
import { connect } from 'react-redux';

// const SizeSelect = ({ label, ...props}) => {
//   const [field, meta] = useField(props);
//   return (
//     <label>
//     <input name="size">
//     </input>
//     </label>
//   )
// }

const CartForm = ({ skus }) => {
  return (
    <div data-testid="cartForm" className="container">
      <Formik
        onSubmit={(values) => console.log(values)}
        initialValues={{ size: '', quantity: 1 }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="form-row">
              <div className="col-md-7 form-group">
                <label htmlFor="size">
                  <Field name="size" as="select" className="form-control">
                    <option value="" disabled defaultValue hidden>
                      select size
                    </option>
                    {Object.keys(skus).map((sku) => (
                      <option value={sku}>{sku}</option>
                    ))}
                  </Field>
                </label>
              </div>
              <div className="col-md-5 form-group">
                <label htmlFor="quantity">
                  <Field name="quantity" as="select" className="form-control">
                    {[...new Array(skus[formik.values.size])].map((_, idx) => (
                      <option value={idx + 1}>{idx + 1}</option>
                    ))}
                  </Field>
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="col form-group">
                <button type="submit" className="form-control">
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({ skus: state.selected.style.skus });

export default connect(mapStateToProps)(CartForm);
