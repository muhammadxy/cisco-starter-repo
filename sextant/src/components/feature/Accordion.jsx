import React, { useState } from 'react';
import data from '../common/data';
import SingleQuestion from '../common/Question';
import Features from './Features';
function Accord() {
  const [questions, setQuestions] = useState(data);
  return (

    <main>

      <div className='container'>
      
      
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Accord;
