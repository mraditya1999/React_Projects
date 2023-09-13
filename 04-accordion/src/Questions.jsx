import SingleQuestion from './SingleQuestion';

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            toggleQuestion={toggleQuestion}
            activeId={activeId}
          />
        );
      })}
    </section>
  );
};

export default Questions;
