import SurveyFlow from 'components/molecules/SurveyFlow/index';
import { useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';
import { FormItem, Input, Paragraph, Button } from 'components/atoms';
import useApiCall from 'utils/hooks/useApiCall';
import { addServiceApi } from 'services/service';

const Questions = () => {
  const [elements, setElements] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [form] = Form.useForm();
  const [serviceCall, , services] = useApiCall(addServiceApi);

  useEffect(() => {
    if (elements?.length) setErrorMessage('');
  }, [elements]);

  useEffect(() => {
    if (services) {
      form.resetFields();
      setElements([]);
    }
  }, [services]);

  const save = data => {
    if (!elements?.length) setErrorMessage('Please add question and answers!');
    else {
      serviceCall({ ...data, questionFlow: elements });
    }
  };

  return (
    <>
      <Paragraph color='red'>{errorMessage}</Paragraph>
      <Form onFinish={save} form={form}>
        <Row>
          <Col xl={12} lg={16} span={10}>
            <FormItem
              label='Title'
              labelheight='100%'
              labelcolor='#7E8299'
              name='title'
              colon={false}
              flexDirection='row'
              labelalign='left'
              label_mb='2'
              rules={[
                {
                  required: true,
                  message: 'Please input title!',
                },
              ]}
            >
              <Input />
            </FormItem>
          </Col>
          <FormItem>
            <Row justify='end'>
              <Button type='primary' htmlType='submit' margin='0px 50px' height='40px'>
                Submit
              </Button>
            </Row>
          </FormItem>
        </Row>
      </Form>
      <SurveyFlow elements={elements} setElements={setElements} />
    </>
  );
};

export default Questions;
