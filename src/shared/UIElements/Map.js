import { useEffect, useRef } from "react";
import "./Map.css";

const Map = (props) => {
  const { center, zoom } = props;
  const mapRef = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef, {
      center,
      zoom,
    });
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};
export default Map;
