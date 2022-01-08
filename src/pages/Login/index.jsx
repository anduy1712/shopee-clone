import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUserByToken,
  loginApi,
  usersSelector
} from '../../store/reducers/usersSlice';
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom';
const Login = () => {
  //Get users
  const { isSuccess } = useSelector(usersSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  //On Submit
  const handleSubmitForm = async (values) => {
    await dispatch(loginApi(values));
    await dispatch(fetchUserByToken());
  };

  useEffect(() => {
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
                      <Field
                        id="username"
                        name="username"
                        placeholder="Email/Số điện thoại/Tên đăng nhập"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
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
