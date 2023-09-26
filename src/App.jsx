import { useState } from 'react'
import QuestionForm from "./QuestionForm";
import SurveyTree from "./SurveyTree"
import './App.css'

function App() {
  const [questions, setQuestions] = useState([]);

  const handleQuestionCreate = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };
  console.log('App', questions)

  return (
    <div className='root-div'>
      <QuestionForm onCreate={handleQuestionCreate} />
      <SurveyTree questions={questions}/>
    </div>
  );
}

export default App
