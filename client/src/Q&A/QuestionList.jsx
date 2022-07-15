import React from 'react';
import QuestionEntry from './individual_questions/QuestionEntry.jsx';

function QuestionList(props) {
  console.log(props.currentQuestions);
  return (
    <ul>
      {props.currentQuestions.map((question) => {
        return (<QuestionEntry key={question.question_id} question={question}/>)
      })}
    </ul>
  )
}

export default QuestionList;