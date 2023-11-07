import React, { useState } from 'react';
import * as _ from 'lodash';
import { generateRandom } from 'helpers';
import { ArrowLeftOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Button, Paragraph } from '../../atoms';

const TitleText = styled(Paragraph)`
  font-size: 22px;
  width: 80%;
  margin-left: 10%;
  @media screen and (max-width: 992px) {
    font-size: 14px;
  }
`;

const Questions = ({ elements, finished, setFinished, answersHistory, setAnswersHistory }) => {
  const questionsGroup = _.groupBy(
    elements.filter(el => el.source),
    'source'
  );
  const questions = Object.keys(questionsGroup);
  const [source, setSource] = useState(questions.length ? questions[0] : null);
  const [delayedQuestions, setDelayedQuestions] = useState([]);

  const selectAnswer = (answer, isBack) => {
    if (!isBack && !answersHistory.includes(answer)) {
      setAnswersHistory([...answersHistory, answer]);
    }
    if (questionsGroup[answer]) {
      const questionsGroupClone = [...questionsGroup[answer]];
      questionsGroupClone.shift();
      setDelayedQuestions([...delayedQuestions, ...questionsGroupClone]);
      setSource(questionsGroup[answer]?.[0]?.target);
      setFinished(false);
    } else if (delayedQuestions.length) {
      const [delayedQuestion] = delayedQuestions;
      delayedQuestions.shift();
      setDelayedQuestions(delayedQuestions);
      setSource(delayedQuestion.target);
      setFinished(false);
    } else {
      setFinished(true);
    }
  };

  const goBack = () => {
    setFinished(false);
    const historyCopy = [...answersHistory];
    const current = answersHistory[answersHistory.length - 2];
    if (current) {
      selectAnswer(current, true);
    } else {
      setSource(questions[0]);
    }
    historyCopy.pop();
    setAnswersHistory(historyCopy);
  };

  const findElById = it => elements.filter(el => el.id === it)[0];

  // eslint-disable-next-line no-nested-ternary
  const questionText = finished
    ? 'Thanks for answering.'
    : elements.length
    ? findElById(source)?.data?.label
    : 'There are no questions for this service';
  return (
    <div className={`questions_modal_content ${finished ? 'finished' : ''}`}>
      <div className='questions_modal_question_bar'>
        {answersHistory.length ? <ArrowLeftOutlined onClick={goBack} /> : ''}
        <TitleText mb={0}>{questionText}</TitleText>
      </div>
      {finished
        ? ''
        : questionsGroup[source]?.map(target => {
            return (
              <Button
                // color={'#000'}
                br={'8px'}
                type='black'
                width='50%'
                padding={'2px 0 0 0 '}
                height='32px'
                key={generateRandom()}
                margin='0 0 10px 0'
                onClick={() => selectAnswer(target.target)}
              >
                {findElById(target.target)?.data?.label}
              </Button>
            );
          })}
    </div>
  );
};

export default Questions;
