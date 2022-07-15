import React, { useState } from 'react';
import {
  Button, Form, Input, message, Modal,
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import UserPool from '../../../UserPool';
import './style.css';

export default function SignUp() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  const showModal = () => {
    console.log('showModal');
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    history.push('/login');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    const usenameattribute = {
      Name: 'name',
      Value: values.email,
    };
    const pnAttribute = {
      Name: 'phone_number',
      Value: values.phone_number,
    };
    const addressAttriibute = {
      Name: 'address',
      value: values.email,
    };
    const attributeList = [];
    attributeList.push(new CognitoUserAttribute(usenameattribute));
    attributeList.push(new CognitoUserAttribute(pnAttribute));
    attributeList.push(new CognitoUserAttribute(addressAttriibute));

    UserPool.signUp(values.email, values.password, attributeList, null, (err, result) => {
      if (err) {
        console.log('signUp', err.message, result);
        message.error(err.message);
      }
      if (!err) {
        message.success('Sign up successfully!');
        showModal();
        console.log('signUp', result);
        // history.push('/login');
      }
    });
  };
  return (
    <>
      <Modal title="🎊 Welcome 🎊" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h3>Welcome, on board!!🙋‍♂️</h3>
        <p>
          We have sent a confirmation link at your registered email address.
        </p>
      </Modal>
      <section className="showcase">
        <img src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
        <div className="overlay" />
        <div className="signup-container">
          <Form
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone number" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Link className="login-form-forgot" to="/">
                Forgot password
              </Link>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Sign Up
              </Button>
              {' '}
              Or
              {' '}
              <Link to="/login">Already, an user ?</Link>
            </Form.Item>
          </Form>

        </div>
      </section>
    </>
  );
}
// res.codeDeliveryDetails.AttributeName
