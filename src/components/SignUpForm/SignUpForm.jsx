import { useState } from 'react';
import css from './SignUpForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';

const contactScheme = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password is too short').max(50, 'Password is too long').required('Password is required'),
  passwordRepeat: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password repeat is required'),
});

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.signupBack}>
      <h3 className={css.logo}>AquaTrack</h3>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordRepeat: '',
        }}
        validationSchema={contactScheme}
        onSubmit={(values, actions) => {
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.signupForm}>
            <div className={css.formTitle}>Sign Up</div>
            <div className={css.signupFormGroupEmail}>
              <label className={css.signUpLabel} htmlFor="email">Email</label>
              <Field
                className={`${css.field} ${errors.email && touched.email ? css.fieldError : ''}`}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" className={css.error} component="span" />
            </div>

            <div className={css.signupFormGroupPassword}>
              <label className={css.signUpLabel} htmlFor="password">Password</label>
                <Field
                  className={`${css.field} ${
                    errors.password && touched.password ? css.fieldError : ''
                  }`}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                />
                <div className={css.eyeIcon} onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
              </div>
              <ErrorMessage name="password" className={css.error} component="span" />
            </div>

            <div className={css.signupFormGroupPassword}>
              <label className={css.signUpLabel} htmlFor="passwordRepeat">Repeat password</label>
                <Field
                  className={`${css.field} ${
                    errors.passwordRepeat && touched.passwordRepeat ? css.fieldError : ''
                  }`}
                  type={showPassword ? 'text' : 'password'}
                  name="passwordRepeat"
                  placeholder="Repeat password"
                />
                <div className={css.eyeIcon} onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </div>
              <ErrorMessage name="passwordRepeat" className={css.error} component="span" />
            </div>

            <button className={css.button} type="submit">
              Sign Up
            </button>

            <div className={css.reminder}>
              Already have an account?{' '}
              <Link className={css.link} to="/signin">
                Sign In
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpPage;
