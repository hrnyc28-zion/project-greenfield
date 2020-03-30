import React from 'react';
import { Formik, Field, useField, useFormikContext } from 'formik';
import { connect } from 'react-redux';

const SizeSelect = ({ sizes }) => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="size" />
      <Field
        name="size"
        as="select"
        className="form-control"
        disabled={sizes.length === 0}
      >
        <option value="" disabled defaultValue hidden>
          {sizes.length === 0 ? 'out of stock' : 'select size'}
        </option>
        {sizes.map((sku) => (
          <option value={sku}>{sku}</option>
        ))}
      </Field>
    </>
  );
};

const CartForm = ({ skus }) => {
  const skusInStock = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const size in skus) {
    // TODO: adjust this
    if (skus[size]) skusInStock[size] = skus[size];
  }
  console.log(skus);
  console.log(skusInStock);
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
                <SizeSelect sizes={Object.keys(skusInStock)} />
              </div>
              <div className="col-md-5 form-group">
                <label htmlFor="quantity" />
                <Field name="quantity" as="select" className="form-control">
                  {[...new Array(skus[formik.values.size])].map((_, idx) => (
                    <option value={idx + 1}>{idx + 1}</option>
                  ))}
                </Field>
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
