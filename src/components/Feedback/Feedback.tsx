import Form from "../Form/Form.tsx";

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback_title">
          <h2 className="title-2">Район на карте</h2>
        </div>

        <Form className="feedback_form" />
      </div>
    </section>
  );
};

export default Feedback;
