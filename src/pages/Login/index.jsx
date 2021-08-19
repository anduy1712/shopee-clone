import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi, usersSelector } from '../../store/reducers/usersSlice';
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
const Login = () => {
  //Get users
  const { isSuccess } = useSelector(usersSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  //On Submit
  const handleSubmitForm = (values) => {
    dispatch(loginApi(values));
    history.push('/');
  };

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/home',
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
  };
  useEffect(() => {
    // dispatch(getUsers());
    if (isSuccess) {
      history.push('/');
    }
  }, [dispatch, history, isSuccess]);
  return (
    <section className="main">
      <div className="login">
        <div className="grid wide">
          <div className="row">
            <div className="col l-12">
              <div className="formlogin">
                <Formik
                  initialValues={{
                    username: '',
                    password: ''
                  }}
                  onSubmit={handleSubmitForm}
                >
                  <Form>
                    <h3 className="form-title">Đăng Nhập</h3>
                    <div className="form-group">
                      {/* <label htmlFor="username">Username:</label> */}
                      <Field
                        id="username"
                        name="username"
                        placeholder="Email/Số điện thoại/Tên đăng nhập"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      {/* <label htmlFor="password">Password:</label> */}
                      <Field
                        id="password"
                        name="password"
                        placeholder="Mật khẩu"
                        type="password"
                      />
                    </div>
                    <button className="btn btn-primary" type="submit">
                      Đâng Nhập
                    </button>
                    <StyledFirebaseAuth
                      uiConfig={uiConfig}
                      firebaseAuth={firebase.auth()}
                    />
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
