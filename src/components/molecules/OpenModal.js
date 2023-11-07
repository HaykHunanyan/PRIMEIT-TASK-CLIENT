import React, { useState } from 'react';
import { Modal, Title } from 'components/atoms';

const OpenModal = ({ modalVisible, setModalVisible, modalVisibleDefaultValue }) => {
  const [finishAction, setFinishAction] = useState({ text: '', open: false });
  const { questions, answers, step, total } = modalVisible;

  const nextQuestion = modalStep => {
    if (modalStep > total) {
      return finish(modalStep);
    }
    return setModalVisible({ ...modalVisible, step: modalStep });
  };

  const finish = modalStep => {
    setFinishAction({
      ...finishAction,
      open: true,
      text: `You answered ${modalStep - 1} out of ${total}!`,
    });
  };

  return (
    <Modal
      visible={modalVisible?.open}
      okText={''}
      onOk={() => finish(step)}
      onCancel={() => setModalVisible({ ...modalVisibleDefaultValue })}
    >
      <Title label={3}>{questions[step - 1].text}</Title>
      <div className='question_content'>
        {!finishAction?.open ? (
          answers[step - 1].map(el => {
            return (
              <div key={el.id}>
                <div onClick={() => (el.nextQuestion ? nextQuestion(step + 1) : finish(step))}>
                  {el.label}
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <div>{finishAction.text}</div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default OpenModal;
