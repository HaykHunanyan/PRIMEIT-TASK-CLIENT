import React, { useEffect, useState } from 'react';
import { fetchAllServiceApi } from 'services/service';
import useApiCall from 'utils/hooks/useApiCall';
import OpenModalComp from 'components/molecules/OpenModal';
import './MainWrapper.scss';

const Main = () => {
  const [response, setResponse] = useState({ value: [], total: 0 });
  const modalVisibleDefaultValue = {
    open: false,
    questions: [],
    answers: [],
    step: 0,
    total: 0,
  };
  const [modalVisible, setModalVisible] = useState({
    ...modalVisibleDefaultValue,
  });
  const { value } = response;
  const [serviceCall, , services] = useApiCall(fetchAllServiceApi);

  useEffect(() => {
    serviceCall();
  }, []);

  useEffect(() => {
    if (services?.data) {
      setResponse({ ...response, value: services.data, total: services.total });
    }
    // else if (services?.total === 0) serviceCall();
  }, [services]);

  const OpenModal = itemData => {
    const { questionFlow } = itemData;
    const questions = [];
    const answers = [];

    // Create a map of answers using their IDs for easier access
    const answersMap = questionFlow
      .filter(data => data.type === 'answer')
      .reduce((map, el) => {
        // eslint-disable-next-line no-param-reassign
        map[el.id] = el;
        return map;
      }, {});

    questionFlow.forEach(data => {
      if (data.type === 'question') {
        questions.push({ id: data.id, text: data.data.label });

        const answerList = questionFlow.filter(
          answerData => answerData.source === data.id && answerData.target
        );
        const answersData = answerList.map(answer => {
          const answerEl = answersMap[answer.target];
          const nextQuestion = questionFlow.find(q => q.source === answerEl.id)?.target;
          return {
            label: answerEl.data.label,
            id: answerEl.id,
            question: data.id,
            nextQuestion,
          };
        });

        if (answersData.length) {
          answers.push(answersData);
        }
      }
    });

    const lastAnswers = answers[answers.length - 1];
    const randomNum = lastAnswers.length;
    const randomIndex = Math.floor(Math.random() * randomNum);
    lastAnswers[randomIndex].nextQuestion = 'random answer generation';

    setModalVisible({
      ...modalVisible,
      open: true,
      questions,
      answers,
      step: 1,
      total: questions.length,
    });
  };

  return (
    <div className='questions_list'>
      {value.map(el => {
        return (
          <div key={el.id} className='question_list_item' onClick={() => OpenModal(el)}>
            <div>{el.title}</div>
          </div>
        );
      })}
      {modalVisible?.open && (
        <OpenModalComp
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalVisibleDefaultValue={modalVisibleDefaultValue}
        />
      )}
    </div>
  );
};

export default Main;
