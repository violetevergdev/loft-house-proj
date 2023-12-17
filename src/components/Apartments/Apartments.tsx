import ApartmentsCard from "./ApartmentsCard.tsx";

const Apartments = () => {
  return (
    <section className="apartments">
      <div className="container">
        <div className="apartments_title">
          <h2 className="title-2">Наши квартиры</h2>
        </div>

        <ApartmentsCard />
      </div>
    </section>
  );
};

export default Apartments;
