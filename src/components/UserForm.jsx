import React from 'react';
import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registrationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone:  yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .length(12)
    .required('A phone number is required'),
});

export default function UserForm({setIsShowForm, setUsers}) {

  // handleSaveUser = (e) => {
  //   console.log(e)
  // }
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phone: '',
        }}
        validationSchema={registrationSchema}
        validateOnBlur
        onSubmit={e => {
          console.log('Submit', e);
          setUsers(users => [...users, { id: `${e.phone}`, name: `${e.firstName} ${e.lastName}`, phone: e.phone }])
          setIsShowForm()
        }}>
        {(...args) => (
          <Form>
            {console.log('args', args)}
            <div className="form">
              <div className="form-item ">
                <Field name="firstName" />
                <label className="label" htmlFor='firstName'>Your first name</label>
                <ErrorMessage name="firstName" className="errormessage" component='span'/>
              </div>
              <div className="form-item ">
                <Field name="lastName" />
                <label className="label" htmlFor='lastName'>Your last name</label>
                <ErrorMessage name="lastName" className="errormessage" component='span'/>
              </div>
              <div className="form-item ">
                <Field name="phone" />
                <label className="label" htmlFor='phone'>Your phone</label>
                <ErrorMessage name="phone" className="errormessage" component='span'/>
              </div>
              <button type="submit" className='btn'>Save</button>
              <button type="submit" className='btn' onClick={() => setIsShowForm()}>Cancel</button>
            </div>
          </Form>
        )}

      </Formik>
    </>
  )
}
