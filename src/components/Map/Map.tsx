import YandexMap from "./YandexMap.tsx";

const Map = () => {
  return (
    <section className="section-map">
      <div className="container">
        <div className="section-map_title">
          <h2 className="title-2">Район на карте</h2>
        </div>

        <div className="section-map_map">
          <YandexMap />
        </div>
      </div>
    </section>
  );
};

export default Map;
