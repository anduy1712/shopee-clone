import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Column from '../../components/Column';
import { editUserApi } from '../../store/reducers/usersSlice';
import FileBase64 from 'react-file-base64';
import imageUploaded from '../../helpers/covertBase';
import UserMenu from './UserMenu';

const User = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const inputFiles = useRef(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const [img, setImg] = useState(user.photoImage);

  if (!user) {
    history.push('/');
  }
  //Open FileType from Button
  const openImg = () => {
    inputFiles.current.click();
  };
  //Image File Change
  const imageUploaded = () => {
    var file = document.querySelector('input[type=file]')['files'][0];
    var reader = new FileReader();
    reader.onload = function () {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  };
  //Submit Form
  const handleSubmitForm = (values) => {
    const data = { ...values, photoImage: img };
    dispatch(editUserApi(data));
  };
  //func
  return (
    <section className="main">
      <section className="account">
        <div className="grid wide">
          <div className="row">
            <Column c={0} m={3} l={2}>
              <UserMenu />
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
                            id: user.id,
                            email: user.email,
                            username: user.username,
                            password: user.password,
                            name: user.name,
                            phone: user.phone,
                            address: user.address,
                            author: user.author
                          }}
                          onSubmit={handleSubmitForm}
                        >
                          <Form>
                            <div className="form-group">
                              <label>Tên</label>

                              <Field
                                id="username"
                                name="username"
                                value={user.username}
                              />
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <span>{user.email}</span>
                              <a href="/">Thay đổi</a>
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Số Điện Thoại</label>
                              <Field
                                id="phone"
                                name="phone"
                                value={user.phone}
                              />
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Lưu
                            </button>
                          </Form>
                        </Formik>
                      </div>
                    </Column>
                    <Column c={4} m={4} l={4}>
                      <div className="profile-content-avatar">
                        <img src={img} alt="img_avatar" />
                        <button
                          type="file"
                          for="avatar"
                          className="btn btn-default"
                          onClick={openImg}
                        >
                          Chọn ảnh{' '}
                        </button>
                        <input
                          hidden
                          type="file"
                          onChange={imageUploaded}
                          ref={inputFiles}
                          accept="image/png, image/gif, image/jpeg"
                        />
                        {/* <div  className="testinput">
                          <FileBase64 multiple={true} onDone={getFiles} />
                        </div> */}
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
