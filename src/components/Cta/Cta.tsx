import Form from "../Form/Form";

const Cta = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta_title">
          <h2 className="title-2">Хотите посмотреть?</h2>
        </div>

        <div className="cta_wrapper">
          <div className="cta_text">
            <p>
              ЖК LoftHouse – это проект бизнес-класса, расположенный в центре
              города, на Наб. реки Фонтанки 10-15. Комплекс предлагает своим
              жильцам квартиры площадью от 40 до 170 кв. м. В здании будет три
              секции, в которых разместится всего 56 квартир.
            </p>
          </div>

          <Form className="cta_form" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
