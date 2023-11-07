import React, { useEffect } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import client from 'feathers';
import { loginError, loginLoading } from 'selectors/users';
import { clearLoginError, userLogin } from 'actions/users';
import { AuthCard } from 'components/atoms/Partials';
import { Button, FormItem, Input, InputPassword, Title } from 'components/atoms';

const SignIn = ({ history }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const error = useSelector(loginError);
  const loading = useSelector(loginLoading);

  const onFinish = values => {
    dispatch(userLogin.request(values));
    client
      .authenticate({
        strategy: 'local',
        ...values,
      })
      .then(() => {
        history.push('/questions');
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  };

  const changePath = path => {
    dispatch(clearLoginError.request());
    history.push(path);
  };

  useEffect(() => {
    if (error) {
      if (error.data && error.data.redirect) {
        switch (error.data.type) {
          case 'NotVerified':
            changePath('/not-verified');
            break;
          case 'NotActive':
            changePath('/not-active');
            break;
          default:
            Notification.warning(error.data.message);
        }
      }
      form.setFields([
        {
          name: 'email',
          value: form.getFieldValue('email'),
          errors: ['Invalid credentials'],
        },
        {
          name: 'password',
          value: form.getFieldValue('password'),
          errors: ['Invalid credentials'],
        },
      ]);
    }
  }, [error]);

  return (
    <AuthCard>
      <div className='auth_content_card_header'>
        <Title level={2}>LOG IN</Title>
      </div>
      <Form
        form={form}
        name='login'
        onFinish={onFinish}
        size='large'
        scrollToFirstError
        data-testid='form'
      >
        <FormItem
          name='email'
          label='Email'
          labelCol={{ span: 24 }}
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder='Email*' data-testid='email' />
        </FormItem>

        <FormItem
          name='password'
          label='Password'
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <InputPassword placeholder='Password*' data-testid='password' />
        </FormItem>
        <FormItem>
          <div className='auth_submit_button_container'>
            <Button type='primary' htmlType='submit' loading={loading} width='160px' mt='20'>
              Log In
            </Button>
          </div>
        </FormItem>
      </Form>
    </AuthCard>
  );
};

export default withRouter(SignIn);
