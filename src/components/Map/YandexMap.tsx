import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMap = () => {
  const defaultState = {
    center: [59.943543, 30.338928],
    zoom: 13,
    controls: ["zoomControl", "fullscreenControl"],
    behaviors: ["disable.scrollZoom"],
  };
  return (
    // @ts-ignore
    <YMaps>
      <Map
        className="map"
        defaultState={defaultState}
        modules={[
          "control.ZoomControl",
          "control.FullscreenControl",
          "behavior.ScrollZoom",
        ]}
      >
        <Placemark
          modules={["geoObject.addon.balloon"]}
          geometry={[59.943543, 30.338928]}
          options={{ iconColor: "red" }}
          properties={{
            balloonContentBody: "Наб. реки Фонтанки 10-15",
          }}
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
