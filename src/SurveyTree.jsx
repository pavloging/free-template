/* eslint-disable react/prop-types */
import { useState } from 'react';

const Question = ({ question, options, onSelect }) => {
  const handleOptionSelect = (selectedOption) => {
    onSelect(selectedOption);
  };

  return (
    <div>
      <h3>{question}</h3>
      {options.map((option) => (
        <button key={option} onClick={() => handleOptionSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

const SurveyTree = ({questions}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelect = (selectedOption) => {
    setAnswers([...answers, selectedOption]);
    setCurrentQuestion(currentQuestion + 1);
  };

  // const questions = [
  //   {
  //     question: 'Болит ли у вас голова?', // 0
  //     options: ['Да', 'Нет'],
  //     nextQuestionIndex: [1, 2], // Индексы следующих вопросов в зависимости от ответа
  //   },
  //   {
  //     question: 'Есть ли покраснения', // 1
  //     options: ['Да', 'Нет', 'Думаю'],
  //     nextQuestionIndex: [3, 4, 5],
  //   },
  //   {
  //     question: 'Вопрос 3: Ответите на него', // 2
  //     options: ['Да', 'Нет'],
  //     nextQuestionIndex: [5, 6],
  //   },
  //   {
  //     question: 'Вопрос 4: Ответите на него', // 3
  //     options: ['Да', 'Нет'],
  //     nextQuestionIndex: [5, 5],
  //   },
  //   {
  //     question: 'Вопрос 5: Ответите на него', // 4
  //     options: ['Да', 'Нет'],
  //     nextQuestionIndex: [6, 6],
  //   },
  //   {
  //     question: 'Вопрос 5: Ответите на него', //5
  //     options: ['Да', 'Нет'],
  //     nextQuestionIndex: [6],
  //   },
  //   // Добавьте больше вопросов и вариантов ответов по своему усмотрению
  // ];

  const getNextQuestionIndex = (answer) => {
    const nextQuestionIndices = questions[currentQuestion].nextQuestionIndex;
    const nextQuestionIndex = answer === 'Да' ? nextQuestionIndices[0] : nextQuestionIndices[1];
    return nextQuestionIndex;
  };

  if (currentQuestion === questions.length) {
    return (
      <div>
        <h2>Опрос завершен!</h2>
        <h3>Ваши ответы:</h3>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <Question
      question={questions[currentQuestion].question}
      options={questions[currentQuestion].options}
      onSelect={(selectedOption) => {
        handleAnswerSelect(selectedOption);
        const nextQuestionIndex = getNextQuestionIndex(selectedOption);
        setCurrentQuestion(nextQuestionIndex);
      }}
    />
  );
};

export default SurveyTree;
