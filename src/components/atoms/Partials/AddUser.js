import React from 'react';
import { Row, Radio } from 'antd';
import { FormItem, Input, InputPassword, Col, DatePicker } from 'components/atoms';

const AddUser = () => {
  return (
    <>
      <FormItem
        name='firstName'
        label='First-name'
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
            whitespace: true,
          },
          {
            max: 30,
            message: 'Maximum 30 characters!',
          },
        ]}
      >
        <Input placeholder='First name*' />
      </FormItem>
      <FormItem
        name='lastName'
        label='Last-name'
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
            whitespace: true,
          },
          {
            max: 30,
            message: 'Maximum 30 characters!',
          },
        ]}
      >
        <Input placeholder='Last name*' />
      </FormItem>
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
        <Input placeholder='Email*' />
      </FormItem>
      <Row gutter={24}>
        <Col span={12}>
          <FormItem
            name='gender'
            label='Gender'
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please select your gender',
              },
            ]}
          >
            <Radio.Group>
              <Radio value='male'>Male</Radio>
              <Radio value='female'>Female</Radio>
            </Radio.Group>
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name='birth'
            label='Birth'
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please select your gender',
              },
            ]}
          >
            <DatePicker format='MM-DD-YYYY' />
          </FormItem>
        </Col>
      </Row>
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
        <InputPassword placeholder='Password*' />
      </FormItem>
      <FormItem
        name='repeatPassword'
        label='Repeat Password'
        labelCol={{ span: 24 }}
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <InputPassword placeholder='Confirm Password*' />
      </FormItem>
    </>
  );
};

export default AddUser;
