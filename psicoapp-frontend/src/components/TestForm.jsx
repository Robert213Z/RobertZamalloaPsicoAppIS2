import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function TestForm({ questions, onSubmit }) {
  const [answers, setAnswers] = useState(
    questions.reduce((acc, question) => {
      acc[question.id] = '';
      return acc;
    }, {})
  );

  const handleChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.text}</p>
          <Input 
            type="text" 
            value={answers[question.id]} 
            onChange={(e) => handleChange(question.id, e.target.value)} 
          />
        </div>
      ))}
      <Button type="submit" variant="primary">Enviar Respuestas</Button>
    </form>
  );
}

export default TestForm;
