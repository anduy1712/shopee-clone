import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Column from '../../components/Column';

const User = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    history.push('/');
  }
  //func
  const openFile = (file) => {};
  return (
    <section className="main">
      <section className="account">
        <div className="grid wide">
          <div className="row">
            <Column c={12} m={3} l={2}>
              <div>User Tools</div>
            </Column>
            <Column c={12} m={9} l={10}>
              <div className="profile">
                <div className="profile-header">
                  <h2 className="profile-header__title">Hồ Sơ Của Tôi</h2>
                  <p className="profile-header__subtitle">
                    Quản lý thông tin hồ sơ để bảo mật tài khoản
                  </p>
                </div>
                <div className="profile-content">
                  <div className="row">
                    <Column c={8} m={8} l={8}>
                      <div className="profile-content-form">
                        <Formik
                          initialValues={{
                            name: '',
                            email: '',
                            number: ''
                          }}
                          onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                          }}
                        >
                          <Form>
                            <div className="form-group">
                              <label>Tên</label>

                              <Field
                                id="name"
                                name="name"
                                value={user[0].displayName}
                              />
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <span>{user[0].email}</span>
                              <a href="/">Thay đổi</a>
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Số Điện Thoại</label>
                              <Field id="number" name="number" />
                            </div>
                            <button className="btn btn-primary">Lưu</button>
                          </Form>
                        </Formik>
                      </div>
                    </Column>
                    <Column c={4} m={4} l={4}>
                      <div className="profile-content-avatar">
                        <img src={user[0].photoURL} alt="img_avatar" />
                        <button
                          type="file"
                          for="avatar"
                          className="btn btn-default"
                        >
                          Chọn ảnh{' '}
                        </button>

                        <span>
                          Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG
                        </span>
                      </div>
                    </Column>
                  </div>
                </div>
              </div>
            </Column>
          </div>
        </div>
      </section>
    </section>
  );
};

export default User;
